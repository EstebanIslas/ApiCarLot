const express = require('express');
const router = express.Router(); //Define the routes

const pool = require('../database');

router.get('/getAllUsers', (req, res)=>{
    pool.query('SELECT * FROM users', (err, rows, fields)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log('Problems with the Server: ', err);
        }
    });
});

router.post('/login/',(req, res)=>{
    const {correo, password} = req.body;
    //console.log(id);

    pool.query('SELECT * FROM users WHERE correo = ? AND password = ?', [correo, password], (err, rows, fields)=>{
        if (!err) {
            res.json(rows[0]);
        } else {
            res.json({Status: 'Error!'});
            console.log('Problems with the Server: ', err); 
        }
    });
});

router.post('/registroUsuario', (req, res)=>{
    const{id, nombre, apellido, telefono, correo, password, rol} = req.body;
    const query = `Call registroUsuarios(?,?,?,?,?,?,?);`;

    pool.query(query, [id, nombre, apellido, telefono, correo, password, rol], (err, rows, fields)=>{
        if (!err) {
            res.json({Status: 'Usuario Registrado'})
        } else {
            res.json({Status: 'Error!'});
            console.log('Error al Registrar el usuario', err);
        }
    });
});

router.post('/addUser',(req, res)=>{
    const {id, correo, password, image, rol, id_person} = req.body; //Variable que recibe datos de la url
    const query = `Call usersAddorEdit(?,?,?,?,?,?);`; //Llama al procedure de Mysql

    pool.query(query, [id, correo, password, image, rol, id_person], (err, rows, fields)=>{
        if (!err) {
            res.json({Status: 'User Saved'});
        } else {
            console.log('Problems with the Server: ', err);
        }
    });
});

router.put('/updateUser/:id', (req, res)=>{
    const {correo, password, image, rol, id_person} = req.body; //Variable que recibe datos de la url
    const { id } = req.params;
    const query = `Call usersAddorEdit(?,?,?,?,?,?);`;

    pool.query(query, [id, correo, password, image, rol, id_person], (err, rows, fields)=>{
        if (!err) {
            res.json({Status: 'User Updated'});
        } else {
            console.log('Problems with the Server: ', err);
        }
    });
});

router.delete('/deleteUser/:id', (req, res) =>{
    const {id} = req.params;
    pool.query('DELETE FROM users WHERE id = ?', [id], (err, rows, fields)=>{
        if (!err) {
            res.json({Status: 'User deleted'});
        } else {
            console.log('Problems with the Server: ', err);
        }
    });
});


module.exports = router;