import { timeStamp } from "console";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("agent", (table: Knex.TableBuilder) => {
        table.increments()
        table.string("fullName")
        table.string("email")
        table.string("password")
        table.string("department")
        //table.uuid('converstion_id').defaultTo(knex.raw('uuid_generate_v4()'));
        table.enum('status', ['active', 'inactive']).defaultTo('inactive');
        table.timestamps(true, true)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("agent")
}

