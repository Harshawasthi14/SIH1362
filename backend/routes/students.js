const express=require("express");
const user=express();

const multer=require("multer");

const path=require("path");

const bodyParser =require("body-parser");
// const { importStudent } = require("../controllers/students");


user.use(bodyParser.urlencoded({extended:false}));


// user.use(express.static(path.join(__dirname,"public")));

const storage=multer.diskStorage({
    destination:(req,file,cb) =>{
        return cb(null,"./uploads")
    },

    filename:(req,file,cb)=>{
        return cb(null,file.originalname)
    }
});

const upload=multer({storage:storage});

 const studentController=require("../controllers/students");

user.post("/importStudent",upload.single("file"),studentController.importStudent)
module.exports=user;

