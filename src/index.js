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

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin' , '*');
    res.header('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allows-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/** SERVER **/

app.listen(app.get('port'), ()=>{
    console.log('Server on Port: ', app.get('port'));
});