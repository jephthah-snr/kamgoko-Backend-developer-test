import { autoInjectable, inject, delay } from "tsyringe"
import AgentRepository from "src/Repositories/agentRepository"
import conversationRepository from "src/Repositories/conversationRepository"
import { agentRegister } from "src/interfaces.ts/types"
import {signToken} from "../helpers/jwt"
import httpStatus from "http-status"
import { conversation } from "src/interfaces.ts/types"




@autoInjectable()
export default class ClientService{
    constructor(
        @inject(delay(() => AgentRepository)) private readonly agentrepository:AgentRepository,
        @inject(delay(() => conversationRepository)) private readonly conversationrepository:conversationRepository
    ){}

    clientRegister = async(payload: agentRegister) => {
        //chec if user exists 
        const user = await this.agentrepository.findByEmail(payload.email)
        if(user){
            return ({
                status: 200,
                data: user
            })
        }
        const response = await this.agentrepository.save(payload)
        return {
            status: httpStatus.OK,
            message: "User logged in successfully",
            data: {
              token: signToken(String(payload.email)),
            },
            response: response
          };
    };

    startConversation = async(payload: Partial<conversation>) => {
        const response = await this.conversationrepository.create(payload)
        return {
            status: httpStatus.OK,
            message: "you opened a new conversation",
            data: response
          };
    }

}