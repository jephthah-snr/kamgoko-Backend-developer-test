import { FastifyReply, FastifyRequest } from "fastify";
import UserService from "src/Services/agentService";
import { autoInjectable, delay, inject } from "tsyringe";
import httpStatus from "http-status";
import { agentRegister, agentLogin} from "src/interfaces.ts/types";

@autoInjectable()
export class AgentController {
  constructor(
    @inject(delay(() => UserService)) private readonly authService: UserService
  ) {}
  registerAgent = async (
    req: FastifyRequest<{
      Body: agentRegister;
    }>,
    res: FastifyReply
  ) => {
    try {
      const response = await this.authService.agentRegister(req.body);
      return res.status(httpStatus.OK).send(response);
    } catch (error: any) {
      return res
        .status(error.statusCode || 500)
        .send({ message: error.message });
    }
  };

  login = async (
    req: FastifyRequest<{
      Body: agentLogin;
    }>,
    res: FastifyReply
  ) => {
    try {
      const response = await this.authService.agentLogin(req.body);
      return res.status(httpStatus.OK).send(response);
    } catch (error: any) {
      return res
        .status(error.statusCode || 500)
        .send({ message: error.message });
    }
  };
}