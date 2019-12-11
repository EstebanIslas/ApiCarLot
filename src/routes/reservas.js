const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/getReservas', (req, res)=>{
    pool.query('SELECT * FROM reservas', (err, rows, fields)=>{
        if (!err) {
            res.json(rows);
        }else{
            console.log('Server has been problems: ', err);
        }
    });
});

router.post('/getUserReserva', (req, res)=>{
    const {id_user} = req.body;

    pool.query('SELECT * FROM reservas INNER JOIN parks WHERE parks.id = reservas.id_park AND reservas.id_user = ?;', [id_user], (err, rows, fields)=>{
        if (!err) {
            res.json(rows);            
        } else {
            res.json({Status: 'Error en consulta'});
            console.log('Problems with the Server: ', err);
        }
    });
});

router.post('/registroReserva', (req, res)=>{
    const { id, id_park, id_user } = req.body;

    const query = `CALL registroReservas(?,?,?);`;

    pool.query(query, [id, id_park, id_user], (err, rows, fields)=>{
        if (!err) {
            res.json({Status: 'Reserva insertada'});            
        } else {
            res.json({Status: 'Error al insertar Reserva'});
            console.log('Error al insertar Reserva', err);
        }
    });
});

module.exports = router;