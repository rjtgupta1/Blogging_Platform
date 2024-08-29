import express from 'express'
import post from '../controllers/post.js';
import viewBlog from '../controllers/viewBlog.js';
import deletePost from '../controllers/deletePost.js';
import update from '../controllers/update.js';
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({msg:"This is working fine"});
})

// creating a blog post
router.post('/api/post',post)
router.get('/api/posts',viewBlog)
router.delete('/api/delete',deletePost)
router.put('/api/update',update)

export default router;