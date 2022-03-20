const knex = require('../database');


module.exports = {
    async index(req, res){
        const result =  await knex('projects');
        return res.json(result)
    },
}