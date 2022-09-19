import Conversation from "src/models/conversation";
import { autoInjectable } from "tsyringe";


@autoInjectable()
export default class conversationRepository{
    async create(item: Partial<Conversation>): Promise<Conversation> {
        return await Conversation.query().insert({
            agent_id: item.agent_id,
            is_closed: false
        });
      };
}