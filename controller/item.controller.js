
const Item = require('../models/item.models');
const User = require('../models/user.models');

exports.create = async (req, res) => {
    // create object to store in db
    const obj = {
        item_name: req.body.item_name,
        description: req.body.description,
        price: req.body.price,
        location: req.body.location,
        brand: req.body.brand,
        purchase_year: req.body.purchase_year,
    }
    try{
        const item = await Item.create(obj);
        // updating the item userId field
        item.userId = req._id;
        await item.save();

        // Finding user
        let user = await User.findById({_id: req._id});

        // Update user postId field
        if(!user.postId.includes(item._id) || user.postId.length == 0) {
            user.postId.push(item._id);
        }
        await user.save();
        res.status(201).send(item);
    }catch(err) {
        res.status(500).send({message: `Error occur at ${err}`});
    }
}

exports.getItem = async (req, res) => {
    try{
        const id = req.params.id;
        const item = await Item.findOne({_id: id});
        if(!item) return res.status(404).send({message: 'No item exists'});
        res.status(200).send(item);
    } catch(err) {
        res.status(500).send({message: `Error occur at ${err}`});
    }
}

exports.delete = async (req, res) => {
    try{
        let _id = req.params.id;
        let check = await Item.findOne({userId: req._id});

        if(!check) return res.status(401).send({message: `Unauthorize`});

        await User.updateOne({_id: req._id}, {$pull: {postId: {$in : [_id]}}})

        await Item.deleteOne({_id: _id});
        
        res.status(200).send({message: `Item deeleted successfully`});
    } catch (err) {
        res.status(500).send({message: `Error occur at `})
    }
}