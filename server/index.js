const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const mongodb = "mongodb+srv://jina123:jinapassword@cluster0.y7pnsnz.mongodb.net/blog?retryWrites=true&w=majority"

const app = express();
const postModel = require('./models/post');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));


app.post('/insert', async (req, res) => {

    const title = req.body.title;
    const content = req.body.content;

    const post = new postModel({ title: title, content: content});

    try {
        await post.save();
        res.send("goodafternoon");
    } catch(err) {
        console.log(err)
    }
});

app.get("/read", async (req, res) => {
    postModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }

        res.send(result);
    })
})

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

