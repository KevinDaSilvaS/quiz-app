const mongoose = require('mongoose')

const connect = async () => {
    const connection = await mongoose.connect('mongodb://admin:123@localhost:27017/admin', 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    return connection
}

module.exports = connect;