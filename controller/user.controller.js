
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.models');
const config = require('../config/server.config');

exports.signup = async (req, res) => {
    const obj = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    }
    try{
        const user = await User.create(obj);
        res.status(201).send({
            name: user.name,
            email: user.email,
            _id: user._id
        });
    } catch (err) {
        res.status(500).send({message: `Error occur at ${err}`});
    }
}

exports.signin = async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(404).send({message: `No User found`});

        let isValid = bcrypt.compareSync(req.body.password, user.password);
        if(!isValid) return res.status(400).send({message: `Invalid password`});

        let token = jwt.sign({_id: user._id}, config.secret, {expiresIn: 1000});
        res.status(200).send({
            name: user.name,
            token: token
        })
    } catch (err) {
        res.status(500).send({message: `Error occur at ${err}`});
    }
}