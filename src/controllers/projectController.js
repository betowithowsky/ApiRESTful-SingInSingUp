const express = require('express');
const authMiddleware = require('../middleware/auth');

const route = express.Router();
//route.use(authMiddleware);

module.exports = app => {

    app.use(authMiddleware);
    let project = app.route('/projects');
    
    
    project.get((req, res) => {
        res.send({ ok: true, user: req.userId });
    });
    
};
