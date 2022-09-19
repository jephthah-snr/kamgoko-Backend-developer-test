import client from "../models/client"
import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class AgentRepository{
    async save(item: Partial<client>): Promise<client> {
        return await client.query().insert({
            fullName: item.fullName,
            email: item.email,
            token: item.token,
        });
      };

      async findByEmail(email: string) {
        return await client.query().where("email", email).first();
      }
}