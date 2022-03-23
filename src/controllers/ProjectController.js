const knex = require('../database');


module.exports = {
    async index(req, res, next){
        try {
            const {user_id, page = 1} = req.query;
            
            const query = knex('projects')
            .limit(5) //limete de projetos por pagina
            .offset((page - 1) * 5) //deslocamento da pagina
            
            const countObject = knex('projects').count()
            
            if(user_id) {
                query
                    .where({user_id: user_id})
                    .join('users', 'users.id', '=', 'projects.user_id')
                    .select('projects:make.*','users.username')
                    .where('users.deleted_at', null)

                    countObject
                    .where({user_id})
            }

            const [count] = await countObject
            
            //enviando para a requisiçaõ o numero de projetos
            console.log(count);
            res.header('X-Total-Count', count['count'])

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