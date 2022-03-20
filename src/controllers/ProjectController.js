const knex = require('../database');


module.exports = {
    async index(req, res, next){
        try {
            const {user_id} = req.query;
            
            const query = knex('projects');

            if(user_id) {
                query
                    .where({user_id: user_id})
                    .join('users', 'users.id', '=', 'projects.user_id')
                    .select('projects.*','users.username')
            }

            const result = await query;

            return res.json(result)
        } catch (error) {
            next(error)
        }
    },

    async create(req, res, next){
        try {
            const {title, user_id} = req.body;

            await knex('projects').insert({ 
                    title: title,
                    user_id: user_id
                 })

            return res.send();
            
        } catch (error) {
            next(error)
        }
    }
}