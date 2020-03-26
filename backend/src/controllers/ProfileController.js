const connection = require('../database/connection');

module.exports = {

    /*
    esse é o jeito q eu trato com isso 
    async teste1(req,res){
        return res.status(200).json({
            Teste: "Teste"
        })
    }
    */

    async index (request, response) { 
     const ong_id = request.headers.authorization;
    
     const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

        return response.json(incidents);

    }
}