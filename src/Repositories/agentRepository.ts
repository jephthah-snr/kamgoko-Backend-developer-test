import agent from "../models/agent"
import { autoInjectable } from "tsyringe";
import { Agent } from "http";

@autoInjectable()
export default class AgentRepository{
    async save(item: Partial<agent>): Promise<agent> {
        return await agent.query().insert({
            fullName: item.fullName,
            email: item.email,
            password: item.password,
            department: item.department
        });
      };

      async findByEmail(email: string) {
        return await agent.query().where("email", email).first();
      }
}