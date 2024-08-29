import PostSchema from '../model/model.js'

const post = async (req,res)=>{

    const { title,description } = req.body;
    const newPost = PostSchema({
        title,
        description
    })

    try {
        const result = await newPost.save();
        if(result.title)
            res.status(200).json({msg:"post created"});
        else
            res.status(500).json({msg:"Internal server error"});
    } catch (error) {
        res.send(500).json({msg:"Something went wrong"});
    }
}

export default post;