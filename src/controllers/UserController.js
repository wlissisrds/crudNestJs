//funcoes de controle do db
const knex = require('../database');


module.exports = {
    async index(req, res){
        const result =  await knex('users');
        return res.json(result)
    },
    async create(req, res, next){
        try {
            const {username} = req.body
            await knex('users').insert({
                username
            })

            return res.status(201).send();
        } catch (error) {
            next(error)
        }
    },

    async update(req, res, next) {
        try {
            const {id} = req.params
            const {username} = req.body
            await knex('users').update({username}).where({id})
            
            return res.status(200).send();
        } catch (error) {
            next(error)
        }
    }
}