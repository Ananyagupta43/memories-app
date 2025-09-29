import express from 'express';
// const app=express();
import { getPosts,createPost } from '../Controllers/postsController.js';

const router=express.Router();

router.get('/',getPosts)
router.post('/',createPost);

export default router;


