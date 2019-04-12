const mongoose = require('../database/index');
const bcrypt = require('bcryptjs');
const guid = require('guid');

const TelefonesSchema = new mongoose.Schema({
    _id: false,
    numero: {
        type: Number,
        required: true
    },
    ddd: {
        type: Number,
        required: true
    }
});

const UserSchema = new mongoose.Schema({

    id: {
        type: String,
        unique: true,
        require: true
    },
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    senha: {
        type: String,
        required: true
    },
    telefones: [TelefonesSchema],
    data_criacao: {
        type: Date,
        default: Date.now,
        required: true
    },
    data_atualizacao: {
        type: Date,
        default: Date.now,
        required: true
    },
    ultimo_login: {
        type: Date,
        default: Date.now,
        required: true
    }

},
    { versionKey: false });

UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.senha, 5);
    this.senha = hash;
    this.id = guid.raw();

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;