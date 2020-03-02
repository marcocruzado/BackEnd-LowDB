const {getConnection}=require('../database')
const {v4}=require('uuid');


const  getTareas = (req,res)=>{
   const tarea=getConnection().get('tarea').value();
    res.json(tarea)
}


const createTareas=(req,res)=>{

   const newTareas={
       id:v4(),
     nombre:req.body.nombre,
     descripcion:req.body.descripcion
   }
   getConnection().get('tarea').push(newTareas).write();
res.send(newTareas);

}


const getTarea= async(req,res)=>{
   const tarea= await getConnection().get('tarea').find({id:req.params.id}).value()
        res.json(tarea)
}


const updateTarea= async(req,res)=>{
     //primero buscamos la tarea que quiero actualizar
     const result= await getConnection().get('tarea').find({id:req.params.id})
     .assign(req.body)
     .write();
     res.json(result )
     console.log("se actualizao");
     
}


const deleteTarea=async(req,res)=>{
    const dateDlete= await getConnection().get('tarea').remove({id:req.params.id}).write();
    res.json(dateDlete);
}


 
module.exports ={
    getTareas,
    createTareas,
    getTarea,
    updateTarea,
    deleteTarea
}