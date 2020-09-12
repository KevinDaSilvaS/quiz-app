const fs = require('fs')

module.exports = (app) => {
    app.get('/', (req, res) => {
        const file = fs.readFileSync('./statics/list.html','utf8')
        //console.log(file)
        res.send(file)
    })
}