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

/** SERVER **/

app.listen(app.get('port'), ()=>{
    console.log('Server on Port: ', app.get('port'));
});