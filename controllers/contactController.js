const asyncHandler=require('express-async-handler')
const Contact=require("../models/contactModel")
// get all contacts
const getContacts=asyncHandler(async(req, res)=>{
    const allcontacts= await Contact.find();
    res.status(200).json({message:"inside get all contacts", contacts:allcontacts})
})

// post contact
const postContacts=asyncHandler(async(req, res)=>{
    console.log(req.body)
    const {name, email, phoneno}=req.body;
    if(!name || !email || !phoneno){
        res.status=400;
        throw new Error("All fields are mendatory")
    }
    const contact=await Contact.create({
        name,email,phoneno
    })
    res.status(200).json(contact)
})

// get contact
const getContact=asyncHandler(async(req, res)=>{
    const contact= await Contact.findById(req.params.id)
    if(!contact){
        res.status=404;
        throw new Error("Contact not found")
    }

    res.status(200).json(contact)
})

// put contacts
const putContact=asyncHandler(async(req, res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status=404;
        throw new Error("Contact not found")
    }
    const updateContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updateContact)
})

// delete contacts
const deleteContact=asyncHandler(async(req, res)=>{
    const contact=await Contact.findById(req.params.id)
    if(!contact){
        res.status=404;
        throw new Error("Contact not found")
    }
    await Contact.deleteOne({_id:req.params.id});
    res.status(200).json(contact)
})

module.exports = {getContacts,postContacts,getContact,deleteContact,putContact}