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

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

/** SERVER **/

app.listen(app.get('port'), ()=>{
    console.log('Server on Port: ', app.get('port'));
});