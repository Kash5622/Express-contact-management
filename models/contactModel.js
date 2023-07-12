const mongoose=require("mongoose")

const contactSchema= mongoose.Schema({
    name:{
        type:String,
        required:[true, "please add the contact name"]
    },
    email:{
        type:String,
        required:[true, "please add email address"]
    },
    phoneno:{
        type:String,
        required:[true, "please add phone number"]
    }
},
{
    timeStamps:true
}
);

module.exports=mongoose.model("Contact",contactSchema)
