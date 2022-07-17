const User = require('../models/user.models');

const authVerify = async (req, res, next) => {
    
    // Check user name field
    if(!req.body.name) return res.status(400).send({message: `No name field is provided`});

    // Check user email field
    if(!req.body.email) return res.status(400).send({message: `No email field is provided`});
    else {
        const email = await User.findOne({email: req.body.email});
        if(email) return res.status(403).send({message: `Email is already register`});
    }
    // Check user password field
    if(!req.body.password) return res.status(400).send({message: `No password field is provided`});
    next();
}

module.exports = {authVerify}