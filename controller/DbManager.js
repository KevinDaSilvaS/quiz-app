const mongoose = require('mongoose');
const connect = require('../connection/');

class DbManager {

    static async connectMongoDb(){
        const connection = await connect();
        return connection;
    }

    async save(item){
        const insertedItem = await item.save();
        //console.log(insertedItem);
        return insertedItem;
    }

    async saveMany(model, elements){
        const insertions = await model.insertMany(elements);
        //console.log(insertions);
        return insertions;
    }

    async find(model, query){
        const list = await model.find( query );
        //console.log(list);
        if(!list) return [];
        return list;
    }

    async update(model, searchFor, query){
        const updates = await model.updateMany(searchFor, query);
        //console.log(updates);
        return updates;
    }

    async delete(model, searchFor){
        const deleted = await model.deleteMany(searchFor);
        //console.log(deleted);
        return deleted;
    }
}

module.exports = DbManager;