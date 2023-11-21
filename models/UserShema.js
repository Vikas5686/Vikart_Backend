const { mongoose } = require('mongoose');

const userSchema=new mongoose.Schema(
    {
        Username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        Score:{
            type:Number,
            require
        }       
    }
)

const users=new mongoose.model("Users",userSchema)
module.exports=users;