const DbManager = require('../controller/DbManager');
const election = require('../models/election');

const mongoDbOperations = new DbManager();

module.exports = (app) => {
    app.route('/votings')
    .get(async (req, res) =>{

        const list = await mongoDbOperations.find(election, {});
        if(!list[0].question) return res.status(400).send({list})
        res.send({ list })
    })
    .post( async (req, res) =>{

        const quiz = new election(req.body);
        const insertedRegister = await mongoDbOperations.save(quiz);
        if(!insertedRegister._id) return res.status(500).send({
                error: 'could not insert register.try again'
            })
        
        res.status(201).send(insertedRegister)
    })

    app.route('/votings/:idQuiz')
    .put(async (req, res) => {

        const { idQuiz } = req.params;
        const { ok } = await mongoDbOperations.update(election, { _id: idQuiz }, req.body)

        if (ok < 1) return res.status(500).send({
            error: "Server cant update register try again later"
        })
        res.send()
    })
    .delete(async (req, res) => {

        const { idQuiz } = req.params;
        const { ok } = await mongoDbOperations.delete(election, { _id: idQuiz })
        
        if (ok < 1) return res.status(500).send({
            error: "Server cant delete register try again later"
        })
        res.send()
    });
}