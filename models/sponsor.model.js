const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const sponsorSchema = new Schema({
    name: String,
    animal: String,
    valor: {
        type: Number,
        default: 0
    },
    creation_date: {
        type: Date,
        default: Date.now
    },
    NIF: String,
    cidade: String,
    codpostal: String,
    morada: String,
    telefone: String
});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.spsr, sponsorSchema);