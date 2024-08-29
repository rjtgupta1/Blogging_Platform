import PostSchema from '../model/model.js'

const deletePost = async (req,res)=>{
    const result = await PostSchema.findOneAndDelete({_id:req.body.id})
    if(result)
        res.status(200).json({msg:"Post deleted"});
    else
        res.status(400).json({msg:"Post not found"});
}

export default deletePost;