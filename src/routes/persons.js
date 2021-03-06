const express = require('express');
const router = express.Router(); //Define the routes

const pool = require('../database');

router.get('/get_all_persons', (req, res)=>{
    pool.query('SELECT * FROM persons', (err, rows, fields)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log('Problems with the Server: ', err);
        }
    });
});

router.get('/get_person_by_id/:id',(req, res)=>{
    const {id} = req.params; //Obtener del navegador
    console.log(id);

    pool.query('SELECT * FROM persons WHERE id = ?', [id], (err, rows, fields)=>{
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log('Problems with the Server: ', err); 
        }
    });
});

router.post('/create_person',(req, res)=>{
    const {id, nombre, apellido, telefono} = req.body; //Variable que recibe datos de la url
    const query = `Call personsAddorEdit(?,?,?,?);`; //Llama al procedure de Mysql

    pool.query(query, [id, nombre, apellido, telefono], (err, rows, fields)=>{
        if (!err) {
            res.json({Status: 'Person Saved'});
        } else {
            console.log('Problems with the Server: ', err);
        }
    });
});

router.put('/update_person/:id', (req, res)=>{
    const {nombre, apellido, telefono} = req.body; //Variable que recibe datos de la url
    const { id } = req.params;
    const query = `Call personsAddorEdit(?,?,?,?);`;

    pool.query(query, [id, nombre, apellido, telefono], (err, rows, fields)=>{
        if (!err) {
            res.json({Status: 'Person Updated'});
        } else {
            console.log('Problems with the Server: ', err);
        }
    });
});

router.delete('/delete_person/:id', (req, res) =>{
    const {id} = req.params;
    pool.query('DELETE FROM persons WHERE id = ?', [id], (err, rows, fields)=>{
        if (!err) {
            res.json({Status: 'User deleted'});
        } else {
            console.log('Problems with the Server: ', err);
        }
    });
});

module.exports = router;