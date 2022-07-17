
const verifyItem = async (req, res, next) => {

    // checl item name
    if(!req.body.item_name) return res.status(400).send({message: `No item_name is provided`});

    // check description
    if(!req.body.description) return res.status(400).send({message: `No description is provided`});

    // check price
    if(!req.body.price || req.body.price <= 0) return res.status(400).send({message: `No price field is provided`});

    // check location
    if(!req.body.location) return res.status(400).send({message: `No location is provided`});

    // check brand
    if(!req.body.brand) return res.status(400).send({message: `No brand name or description is provided`});

    // check purchase_year
    if(!req.body.purchase_year || req.body.purchase_year > 2021) return res.status(400).send({message: `No purchase_year is provided`});
    next();
}

module.exports = {verifyItem}