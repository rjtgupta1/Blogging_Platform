import PostSchema from '../model/model.js'

const viewBlog = async (req,res)=>{
    const posts = await PostSchema.find();
    if(posts[0])
        res.status(200).json(posts);
    else
        res.status(404).json({msg:"No posts found"});
}

export default viewBlog;