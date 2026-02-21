const mongoose = require("mongoose");

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=> console.log("DB is connect successful"))
    .catch((error)=>{
        console.log(error);
        process.exit(1);
    });
}

module.exports = dbConnect;