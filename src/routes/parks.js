const express = require('express');
const router = express.Router(); //Define the routes

const pool = require('../database'); //Establece la conexion

router.get('/getAllParks', (req, res)=>{
    /*/:nombre_park/:calle
    const {nombre_park, calle} = req.params;
    console.log(nombre_park, " " , calle);*/

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
        descripcion, tarifa, id_person} = req.body;

    const query = `Call registroParks(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;

    pool.query(query, [id, nombre, apellido, telefono, correo, password, rol, nombre_park, calle, 
        colonia, numero_ext, stock, dia_ini, dia_fin, hora_apertura, hora_cierre, 
        descripcion, tarifa, id_person], (err, rows, fields)=>{
        if (!err) {
            res.json({Status: 'Park Registrado'})
        } else {
            res.json({Status: 'Error!'});
            console.log('Error al Registrar Park', err);
        }
    });
});

router.post('/getOnePark', (req, res)=>{
    //:nombre_park/:calle
    const {id} = req.body;
    //console.log(nombre_park, " " , calle);*/

    pool.query('SELECT * FROM parks WHERE id = ?',[id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log('Server has been Problems: ', err);
        }
    });
});

module.exports = router;