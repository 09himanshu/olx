
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    port: process.env.port,
    mongo_url: process.env.mongourl,
    secret: process.env.secret,
}