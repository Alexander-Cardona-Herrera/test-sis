const express = require('express')
const routes = express.Router()
const conexion = require('./config/conexion')


//Get all users
routes.get('/',(req, res) => {
    conexion.query('select * from users',(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});

//Get one user by id
routes.get('/:id',(req, res) => {
    const {id} =req.params
    conexion.query('select * from users where id = ?',[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});

// //Add an user
routes.post('/',( req, res)=>{
    const{name, email, password} = req.body
    let sql = `insert into users(name, email, password) values('${name}','${email}', '${password}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'User Added'})
        }
    })
})

//Delete an user by ID
routes.delete('/:id',(req, res)=>{
    const{id} = req.params
    let sql =`delete from users where id = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'User Deleted'})
        }
    })
});

//Update an user by ID
routes.put('/:id',(req, res)=>{
    const{id}=req.params
    const{name, email, password} = req.body
    let sql = `update users set 
                name ='${name}',
                email='${email}',
                password='${password}'
                where id = '${id}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'User Updated'})
        }
    })

})

module.exports = routes;