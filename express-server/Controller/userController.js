const User = require('../Models/user');
const uuid = require('uuid');

// exports.signin = (req, res, next) => {
//     User.findOne({ username: req.body.username })
//         .then(user => {
//             console.log(user);
//             if (user && (user.password == req.body.password)) {
//                 // foundUser.password == req.body.password
//                 res.status(200).json({
//                     message: "login successful",
//                     data: user
//                 })
//             }
//             res.status(400).json({
//                 message: "incorrect user credential",
//                 data: {}
//             })
//         })
//         .catch(err => { console.log(err) });
// };
exports.signin = async (req, res, next) => {
    const username = req.body.username;
    let user;

    try{
        user = await User.findOne({username : username});
    } catch(err) {
        console.log(err);
    }

    if(user){
        return res.status(200).json({message: user.password});
    }

    return res.status(200).json({message: "User does not exist"});

};

exports.signup = (req, res) => {
    const user = new User({
        id: uuid.v4(),
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.findOne({ username: req.body.username }).exec((err, foundUser) => {
        if (!foundUser) {
            User.findOne({ email: req.body.email }).exec((err, foundUser2) => {
                if (!foundUser2) {
                    user.save()
                        .then((result) => {
                            res.send(result)
                        })
                        .catch((err) => {
                            console.log(err)
                        });
                    res.send('User registration successful');
                } else {
                    res.send(`There is a user registered with email ${req.body.email}`);
                }
            })
        } else {
            res.send(`There is a user registered with username ${req.body.username}`);
        }
    });
};