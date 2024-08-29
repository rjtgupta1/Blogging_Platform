import express from 'express'
import post from '../controllers/post.js';
import viewBlog from '../controllers/viewBlog.js';
import deletePost from '../controllers/deletePost.js';
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({msg:"This is working fine"});
})

// creating a blog post
router.post('/api/post',post)
router.get('/api/posts',viewBlog)
router.delete('/api/delete',deletePost)

export default router;