import { Model } from "objection";



export default class Conversation extends Model{
    tableName = "conversation"

    id!: string;
    conversation_duration!: string;
    client_id!: string;
    agent_id!: string;
    is_closed!: boolean;



    clientData() {
        return {
            conversation_duration: this.conversation_duration,
            client_id: this.client_id,
            agent_id: this.agent_id,
            is_closed: this.is_closed,
        };
      }
}