const express= require('express');
const router=express.Router();
const Post=require('../models/Post');

// Get All Posts
router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

// Post
router.post('/', async (req,res)=>{
    const post1=new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost=await post1.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:err});
    };
    
});

// Specific Post
router.get('/:postID', async (req,res)=>{
    try{
        const post = await Post.findById(req.params.postID);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }

});

// Delete Post
router.delete('/:postID', async (req,res)=>{
    try{
        const removedPost = await Post.remove({_id: req.params.postID});
        res.json(removedPost);
    }catch(err){
        res.json({message:err});
    }
});

// Update a Post
router.patch('/:postID', async (req,res)=>{
    try{
        const updatedPost = await Post.updateOne(
            { _id: req.params.postID },
            { $set: { title: req.body.title , description: req.body.description } }
            );
        res.json(updatedPost);
    }catch(err){
        res.json({message:err});
    }
})

module.exports=router;