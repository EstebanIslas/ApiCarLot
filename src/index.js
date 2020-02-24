const express = require('express'); //Se requiere del modulo y se guarda
const app = express(); // variable para inicializar el server

/** CONFIGURATION **/
app.set('port', process.env.PORT || 3000); //Se envi el puerto

/** MIDDLEWARES **/
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json()); //Objetos Json

/** ROUTES **/

app.use(require('./routes/users')); //importa rutas
app.use(require('./routes/persons'));
app.use(require('./routes/parks'));
app.use(require('./routes/reservas'));

/** CORS **/



/** SERVER **/

app.listen(app.get('port'), ()=>{
    console.log('Server on Port: ', app.get('port'));
});