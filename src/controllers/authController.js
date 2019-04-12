const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const authMiddleware = require('../middleware/auth');

const route = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 1800,
    });
}

module.exports = app => {

    let singUp = app.route('/singup');
    let singIn = app.route('/singin');
    app.use(authMiddleware);
    let search = app.route('/search/:id');

    singUp.post(async (req, res) => {        
        try {
            const user = await User.create(req.body);

            return res.send({
                user,
                token: generateToken({ id: user.id })
            });
        } catch (err) {
            return res.status(400).send({ mensagem: 'E-mail já existente.' });
        }
    });

    singIn.post(async (req, res) => {
        const { email, senha } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send({ mensagem: 'Usuário e/ou senha inválidos' });
        }

        if (!await bcrypt.compare(senha, user.senha)) {
            return res.status(401).send({ mensagem: '"Usuário e/ou senha inválidos"' });
        }

        res.status(200).send({
            user,
            token: generateToken({ id: user.id })
        });

        //await user.save();
    });

    search.get(async (req, res) => {
        
        const id = req.userId;
        const tokenAuth = req.tokenAuth;
        const authHeader = req.headers.authorization;

        const parts = authHeader.split(' ');
        const [scheme, token] = parts;

        if(tokenAuth !== token){
            return res.status(401).send({ mensagem: 'Não autorizado' });
        }

        const user = await User.findOne({ id });
        
        res.status(200).send({
            user
        });
    });

};