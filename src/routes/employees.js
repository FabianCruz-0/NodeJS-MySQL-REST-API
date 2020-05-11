const express = require('express');
const router = express.Router();  //Esta linea crea un objeto para definir rutas en nuestro servidor. Lo estamos almacenando.

const mysqlconnection = require('../database');

router.get('/', (req, res) => 
{
    mysqlconnection.query(' select * from employees', (err, rows, fields) =>
    {
        if(!err)
        {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

router.get('/:id', (req, res) => 
{
    const { id } = req.params;
    mysqlconnection.query('select * from employees where id = ?', [id], (err, rows, fields) => {
        if(!err)
        {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/api/', (req, res) => {
    const { id, nombre, salary } = req.body;
    console.log(req.body);
    mysqlconnection.query('INSERT INTO `employees` (`id`, `nombre`, `salary`) VALUES (?, ?, ?)', [id, nombre, salary], (err, rows, fields) => {
        if(!err)
        {
            res.json({ Status: "Empleoyee saved"});
        } else {
            console.log(err);
        }
    })
});

router.put('/:id', (req,res) => {
    const { nombre, salary } = req.body;
    const { id } = req.params;
    mysqlconnection.query('UPDATE `employees` SET `nombre`= ?,`salary`= ? WHERE id = ?', [nombre, salary, id], (err, rows, fields) => {
        if(!err)
        {
            res.json({ Status: "Empleoyee updated"});
            console.log(req.body)
            console.log(req.params)
        } else {
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlconnection.query('DELETE FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json({Status: "Empleado eliminado"});
        } else {
            console.log(err);
        }
    })
})

module.exports = router;