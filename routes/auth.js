const router = require("express").Router();
const User = require('../model/User');
const jwt = require("jsonwebtoken");

router.post('/register', async (req, res) => {
    
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email Already exists');

    // create a new user 

    const user = new User({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profilePic: req.body.profilePic,
        dob: req.body.dob
    });

    try {
        const saveUser = await user.save();
        console.log(res.send(saveUser));

    } catch (error) {
        res.status(400).send(error);

    }


    // console.log("user", user)
});



// login 

router.post('/login', async (req, res) => {
    const data = await User.findOne({ email: req.body.email });
    if (!data) return res.status(400).send('User is Not register Please Check your Email');

    const password = await User.findOne({ password: req.body.password });
    if (!password) return res.status(400).send('password Not Match');
    const token = jwt.sign({ data }, "abcd");
    const response = {
        "token": token
    }
    res.header('auth-token', token)
        .send(response);


})

// user data 

    



module.exports = router;