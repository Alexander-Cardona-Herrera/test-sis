const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_sis'
});

conexion.connect((err)=>{
    if(err){
        console.log('There has been an ' + err)
    }
    else {
        console.log('Database connected')
    }
})

module.exports = conexion;