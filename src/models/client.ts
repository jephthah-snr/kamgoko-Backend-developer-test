import { Model } from "objection";



export default class Client extends Model{
    static tableName = "client"

    id!: string;
    fullName!: String;
    email!: string;
    token!: string;
    converstion_id!: string;
    platform!: string;


    clientData() {
        return {
          fullName: this.fullName,
          email: this.email,
          converstion_id: this.converstion_id,
          platform: this.platform,
          token: this.token
        };
      }

      static relationMappings = {
        conversation: {
          modelClass: `${__dirname}/conversation`,
          relation: Model.HasManyRelation,
          join: {
            from: "client.id",
            to: "conversation.client_id",
          },
        },
    }
}