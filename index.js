const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

consign({locale: 'pt-br'}).then('./src/controllers').into(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('ApiRESTful On, Rodando na porta ' + port);
});