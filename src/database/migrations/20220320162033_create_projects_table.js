/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table){
        table.text('title')

        //relacionamento com users
        table.integer('user_id')
            .references('users.id')
            .notNullable()
            .onDelete('CASCADE')


        //data e hora atual
        table.timestamp(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('projects')

};
