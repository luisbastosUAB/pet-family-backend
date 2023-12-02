const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const expertSchema = new Schema({
    name: String,
    telefone: String,
    apresentacao: String,
    codPostal: String,
    creation_date: {
        type: Date,
        default: Date.now
    },
    morada: String,
    nif: String,
    especializacao: String,
});


module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.xprt, expertSchema);