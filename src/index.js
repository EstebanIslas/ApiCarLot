const express = require('express'); //Se requiere del modulo y se guarda
const app = express(); // variable para inicializar el server

/** CONFIGURATION **/
app.set('port', process.env.PORT || 3000); //Se envi el puerto

/** MIDDLEWARES **/

app.use(express.json()); //Objetos Json

/** ROUTES **/

app.use(require('./routes/users')); //importa rutas
app.use(require('./routes/persons'));
app.use(require('./routes/parks'));

/** CORS **/

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*'); //Para controlar quien puede consumir mi API
    res.header('Access-Control-Allow-Headers', 
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'); // Para configurar los headers que acepta la API
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); // Para declarar los métodos que acepta el API
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE'); //
    next();
});

/** SERVER **/

app.listen(app.get('port'), ()=>{
    console.log('Server on Port: ', app.get('port'));
});