const express = require('express');
const cors = require('cors');
const path = require('path');
const dbConfig = require('./db/config.js');
const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: "postgres",
    operatorAliases: false,

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuario = require("./models/Usuario")(sequelize, Sequelize);

module.exports = db;


// Crear el servidor/aplicación de express
const app = express();



// Directorio Público
app.use(express.static('public'));

// CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());


// Rutas
app.use('/api/auth', require('./routes/auth'));

app.get('*'), (req, response) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
}


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});