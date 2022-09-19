import { FastifyReply, FastifyRequest } from "fastify";
import ClientService from "src/Services/clientService";
import { autoInjectable, delay, inject } from "tsyringe";
import httpStatus from "http-status";
import { agentRegister, agentLogin} from "src/interfaces.ts/types";

@autoInjectable()
export class ClientController {
  constructor(
    @inject(delay(() => ClientService)) private readonly clientservice: ClientService
  ) {}
  clientAccess= async (
    req: FastifyRequest<{
      Body: agentRegister;
    }>,
    res: FastifyReply
  ) => {
    try {
      const response = await this.clientservice.clientRegister(req.body)
      return res.status(httpStatus.OK).send(response);
    } catch (error: any) {
      return res
        .status(error.statusCode || 500)
        .send({ message: error.message });
    }
  };

  startconversation = async(
    req: FastifyRequest<{Body: agentRegister;}>, res: FastifyReply
  ) => {
    try {
        const {id} = (req as any).user
        const response = await this.clientservice.startConversation({client_id: id})
        return res.status(httpStatus.OK).send(response)
    } catch (error) {
        
    }
  }
}