import { autoInjectable, inject, delay } from "tsyringe"
import AgentRepository from "src/Repositories/agentRepository"
import { agentRegister } from "src/interfaces.ts/types"
import {signToken} from "../helpers/jwt"
import AppError from "src/helpers/Error"
import { agentLogin } from "src/interfaces.ts/types"
import httpStatus from "http-status"
import { compare } from "bcrypt"



@autoInjectable()
export default class UserService{
    constructor(
        @inject(delay(() => AgentRepository)) private readonly agentrepository:AgentRepository
    ){}

    agentRegister = async(payload: agentRegister) => {
        //chec if user exists 
        const user = await this.agentrepository.findByEmail(payload.email)
        if(user){
            return ({error: "user with that email already exists"})  
        }
        const response = await this.agentrepository.save(payload)
        return ({
            status:200,
            message: "user added successfully",
            data: response
        })
    };


  agentLogin = async (payload: agentLogin) => {
    const findEmail = await this.agentrepository.findByEmail(payload.email)
    if (!findEmail) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "Invalid phone number or password"
      );
    }
    const password = await compare(payload.password, findEmail.password);
    if (!password) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "Invalid phone number or password"
      );
    }
    return {
      status: httpStatus.OK,
      message: "User logged in successfully",
      data: {
        token: signToken(String(findEmail.id)),
      },
    };
  };
}