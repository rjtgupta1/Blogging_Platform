import PostSchema from '../model/model.js'

const post = async (req,res)=>{

    const { title,description } = req.body;
    const newPost = PostSchema({
        title,
        description
    })

    try {
        const response = await newPost.save();
        if(response[0])
            res.status(200).json({msg:"post created"});
        else
            res.status(500).json({msg:"Internal server error"});
    } catch (error) {
        res.send(500).json({msg:"Something went wrong"});
    }
}

export default post;