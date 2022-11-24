const express = require('express');
const mongoose = require('mongoose');

const app = express();
const postModel = require('./models/post');

app.use(express.json());

mongoose.connect("mongodb+srv://jina123:jinapassword@cluster0.y7pnsnz.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true,
})

app.get('/', async (req, res) => {
    const post = new postModel({ title: "hi", content: "this is a test"});

    try {
        await post.save();
        res.send("inserted data");
    } catch(err) {
        console.log(err)
    }
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
