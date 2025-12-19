const P=require('../models/Project');
exports.getAll=async(req,res)=>res.json(await P.find().sort({createdAt:-1}));
exports.getOne=async(req,res)=>res.json(await P.findById(req.params.id));
exports.create = async (req, res) => {
  const { title, description, stack, repo, live, image } = req.body;

  const p = new P({
    title,
    description,
    stack: Array.isArray(stack) ? stack : stack?.split(','),
    repo,
    live,
    image
  });

  await p.save();
  res.status(201).json(p);
};

exports.remove=async(req,res)=>{await P.findByIdAndDelete(req.params.id);res.json({message:'Deleted'})};