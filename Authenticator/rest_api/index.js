require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);
const cors = require("cors");
const app = express();

//Settings
app.set('port', port);
app.use(cors());
app.use(express.json())

//Routes
app.use('/api', require('./routes'));

//Server Start
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('There has been an error: ' + error)
    }
    else {
        console.log('Server initialize on port: ' + port)
    }
})