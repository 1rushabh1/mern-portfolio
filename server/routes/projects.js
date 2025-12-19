const r=require('express').Router();
const c=require('../controllers/projectsController');
r.get('/',c.getAll);r.get('/:id',c.getOne);r.post('/',c.create);r.delete('/:id',c.remove);
module.exports=r;