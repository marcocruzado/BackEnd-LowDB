const app= require('./app');

const {createConnection}=require('./database')



createConnection();
//inicializacion del servidor
app.listen(app.get('port'),()=>{
    console.log(`el servidro se encuentrz en ${app.get('port')}`);
    
})