const Post = require("../models/post");
const postModel = require("../models/post");

exports.getAllPosts = async (req, res, next) => {
    let posts;

    try {
        posts = await Post.find();
    } catch (err) {
        console.log(err);
    }

    if(!posts) {
        return res.status(404).json({ message: "No Posts Found"});  
    }

    return res.status(200).json({ posts })
}



exports.postAPost  = async (req, res) => {

    const title = req.body.title;
    const content = req.body.content;

    const post = new postModel({ title: title, content: content});


    try {
        await post.save();
        
    } catch(err) {
        console.log(err)
    }

    return res.status(201).json({post});
};


exports.updatePost = async (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const postId = req.body.id;
    let post;
    
    try{
        post = await Post.findByIdAndUpdate(postId, {
            title,
            content
        });
    } catch (err) {
        // return console.log(err)
        console.log(err)
    }

    if (!post) {
        return res.status(500).json({message: "Unable to update the post"})
    }
    return res.status(200).json({message: "Updated! Please refresh the page"});
}

exports.getById = async (req, res, next) => {
    const id = req.params.id;
    let post;
    try {
        post = await Post.findById(id);
    } catch (err) {
        return console.log(err);
    }

    if (!post) {
        return res.status(404).json({ message: "No post found"});
    }
    return res.status(200).json({post});
}

exports.deletePost = async(req, res, next) => {
    const id = req.params.id;
    let post;
    try {
        post = await Post.findByIdAndRemove(id)
    } catch (err) {
        console.log(err)
    }
    if(!post) {
        return res.status(500).json({ message: "Unable to delete"});
    }

    return res.status(200).json({ message: "Successfully deleted"});
}