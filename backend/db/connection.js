const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://ToshikaRaikwar:HwaXjFbxf3PZRQfU@atlascluster.qnbhuxa.mongodb.net/your-database-name").then(()=>{
    console.log("database connected");
}).catch((e)=>{
    console.log("no connection");
});