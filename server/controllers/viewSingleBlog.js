import PostSchema from '../model/model.js'

const viewSingleBlog = async (req,res)=>{
    try {
        const { id } = req.body;
        const post = await PostSchema.findById(id)
        if(post)
            res.status(200).json(post);
        else
            res.status(404).json({msg:"No post found"});
    } catch (error) {
        console.log("=========",error)
    }
}

export default viewSingleBlog;