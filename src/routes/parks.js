const express = require('express');
const router = express.Router(); //Define the routes

const pool = require('../database'); //Establece la conexion

router.get('/getParks', (req, res)=>{
    pool.query('SELECT * FROM parks', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log('Server has been Problems: ', err);
        }
    });
});

router.post('/registroParks', (req, res)=>{
    const{id, nombre, apellido, telefono, correo, password, rol, nombre_park, calle, 
        colonia, numero_ext, stock, dia_ini, dia_fin, hora_apertura, hora_cierre, 
        descripcion, url_ubicacion, id_person} = req.body;

    const query = `Call registroParks(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;

    pool.query(query, [id, nombre, apellido, telefono, correo, password, rol, nombre_park, calle, 
        colonia, numero_ext, stock, dia_ini, dia_fin, hora_apertura, hora_cierre, 
        descripcion, url_ubicacion, id_person], (err, rows, fields)=>{
        if (!err) {
            res.json({Status: 'Park Registrado'})
        } else {
            res.json({Status: 'Error!'});
            console.log('Error al Registrar Park', err);
        }
    });
});

module.exports = router;