/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//criar tabela
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments('id')
        table.text('username').unique().notNullable()

        //data e hora atual
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//deletar tabela
exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
