const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

consign({locale: 'pt-br'}).then('./src/controllers').into(app);

app.listen(3000, () => {
    console.log('ApiRESTful On, Rodando na porta 3000');
});