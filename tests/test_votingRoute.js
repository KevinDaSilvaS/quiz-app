const { expect } = require('chai');
const axios = require('axios')

describe("Test Suit for voting route", () => {
    
    it("Should return a list of votings", async () => {
        const data = await axios
          .get('http://localhost:4738/votings')
          .then(res => {
            return res;
          })
          .catch(error => {
            return error;
          })

        expect(typeof data.data.list).to.be.equal(typeof [])
        expect(typeof data.data.list[0]).to.be.equal(typeof {})
        expect(data.status).to.be.equal(200)
    })

    it("Should insert a quiz", async () => {
        const data = await axios
          .post('http://localhost:4738/votings', {
                question: "HTML5 is a ...",
                options: ["Programming Language", "markup language", "compiler", "Design Pattern"],
                emailCreator: "kevin.silva@sensedia.com",
                correctAnswer: 1
          })
          .then(res => {
            return res;
          })
          .catch(error => {
            return error;
          })

        expect(data.status).to.be.equal(201)
        expect(data.data.error).to.be.equal(undefined)
    })

    it("Should update a quiz", async () => {
        const data = await axios
          .put('http://localhost:4738/votings/5f577364c38e2b210c1822a7', {
                question: "C is a ...",
                correctAnswer: 0
          })
          .then(res => {
            return res;
          })
          .catch(error => {
            return error;
          })

        expect(data.status).to.be.equal(200)
        expect(data.data.error).to.be.equal(undefined)
    })

    it("Should delete a quiz", async () => {
        const data = await axios
          .delete('http://localhost:4738/votings/5f577364c38e2b210c1822a7')
          .then(res => {
            return res;
          })
          .catch(error => {
            return error;
          })

        expect(data.status).to.be.equal(200)
        expect(data.data.error).to.be.equal(undefined)
    })
})