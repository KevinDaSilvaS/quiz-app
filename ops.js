const mongoose = require('mongoose');
const DbManager = require('./controller/DbManager');
DbManager.connectMongoDb();
const election = require('./models/election');

const mongoDbOperations = new DbManager;
/* const q = new election({
    question: "How many wings does a bird have?",
    options: ["Two", "five", "nine"],
    emailCreator: "kevin@k.com",
})

const q1 = new election({
    question: "which o these is not a javascript framework?",
    options: ["Angular", "React", "Laravel"],
    emailCreator: "kevin@k.com",
    correctAnswer: 2
})

const q2 = new election({
    question: "which of these is not italian food?",
    options: ["Pizza", "Sushi", "Lasagna"],
    emailCreator: "kevin@k.com",
    correctAnswer: 1
})

mongoDbOperations.saveMany(election, [q,q1,q2]) */
//mongoDbOperations.save(q);

//mongoDbOperations.find(election, { emailCreator: "kevin@k.com" })

/* mongoDbOperations.update(election, { emailCreator: "kevin@k.com" }, 
{ $push: { options: "None of the above" } }) */

//mongoDbOperations.delete(election, { _id: "5f50fb1ccce2a82434337e46" });

//https://www.youtube.com/watch?v=pq2u3FqVVy8&pp=qAMBugMGCgJwdBAB
//npx insomnia-documenter --config insomnia/m.json
// npx serve
//https://support.insomnia.rest/article/104-unit-testing