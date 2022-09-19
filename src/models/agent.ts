import { Model, Pojo } from "objection";
import { hashPassword } from "src/helpers/password";
//import { getID } from "src/helpers/_ids";


export default class Agent extends Model{
    static tableName = "agent"

    id!: string;
    fullName!: String;
    email!: string;
    password!: string;
    converstion_id!: string;
    department!: string;
    platform!: string;


    async $beforeInsert() {
        this.password = await hashPassword(this.password);

        //generate conversation ID
        //this.converstion_id = await getID()
      }

      $formatJson(json: Pojo) {
        json = super.$formatJson(json);
        delete json.password;
        return json;
      }


    agentData() {
        return {
          fullName: this.fullName,
          email: this.email,
          converstion_id: this.converstion_id,
          department: this.department,
          platform: this.platform
        };
      }

      static relationMappings = {
        conversation: {
          modelClass: `${__dirname}/conversation`,
          relation: Model.HasManyRelation,
          join: {
            from: "agent.id",
            to: "conversation.user_id",
          },
        },
    }
}