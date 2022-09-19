import { Knex } from "knex";
import { getDefaultFormatCodeSettings } from "typescript";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("conversation",  (table: Knex.TableBuilder) => {
        table.increments();
        table.string("conversation_duration")
        table.string("client_id")
        table.string("agent_id")
        table.boolean("is_closed").defaultTo("false")
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("convesation")
}

