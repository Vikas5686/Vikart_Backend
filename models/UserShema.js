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
        Favourite:{
            type:Number,
            require:true
        } ,      
        cart:{
            type:Number,
            require:true
        }       
    }
)

const users=new mongoose.model("Users",userSchema)
module.exports=users;