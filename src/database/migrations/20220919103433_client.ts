import knex, { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("client",  (table: Knex.TableBuilder) => {
        table.increments();
        table.string("fullName")
        table.string("email")
        table.string("password")
        table.string("converstion_id")
        table.enum('platform', ['Whatsapp', 'Telegram', 'Messenger']);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("client")
}

