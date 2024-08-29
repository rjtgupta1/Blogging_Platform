import express from 'express'
import post from '../controllers/post.js';
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({msg:"This is working fine"});
})

// creating a blog post
router.post('/api/post',post)

export default router;