const express = express();
const routes = express.Router();

//Primeira rota
app.use('/api', require('./src/routes'));

module.exports = routes;