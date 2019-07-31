const express= require('express');
const router=express.Router();
const Post=require('../models/Post');

router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

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

router.get('/:postID', async (req,res)=>{
    try{
        const post = await Post.findById(req.params.postID);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }

});


module.exports=router;