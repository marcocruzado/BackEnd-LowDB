const {Router}=require('express');
 const {getTareas,createTareas,getTarea,updateTarea,deleteTarea} =require('../controllers/tareas.controllers')
const router= Router();

//rutas del servdot
router.get('/tareas',getTareas)
router.get('/tareas/:id',getTarea)
router.post('/tareas',createTareas)
router.put('/tareas/:id',updateTarea)
router.delete('/tareas/:id',deleteTarea)




module.exports=router;