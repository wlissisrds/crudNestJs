/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//criar tabela
//ALTERANDO A TABELA 'USERS' COM CAMPO deleted_at
exports.up = function(knex) {
    return knex.schema.alterTable('users', function(table){
        table.timestamp('deleted_at')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//deletar tabela
exports.down = function(knex) {
    return knex.schema.alterTable('users', function(table){
        table.dropColumn('deleted_at')
    })
};