import PostSchema from '../model/model.js'

const update = async (req,res)=>{
    const { id,title,description } = req.body;
    const result = await PostSchema.findOneAndUpdate({_id:id},{title,description});
    if(result)
        res.status(200).json({msg:"Post updated successfully"});
    else
        res.status(400).json({msg:"Post not found"});
}

export default update;