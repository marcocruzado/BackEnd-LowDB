const express=require('express');
const morgan=require('morgan')

const app=express();

//configuraciones
app.set('port',process.env.PORT||3000);


//middleawares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//rutas
app.use(require('./routes/tareas.routes'))

//archivos staticos



module.exports= app;