const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc gell all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler( async (req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc add  contacts
//@route POST /api/contacts
//@access public

const postContact = asyncHandler(async(req,res)=>{
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact=await Contact.create({
        name,email,phone
    });
    res.status(201).json(contact);
});

//@desc gell indv contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status.apply(404);
        throw new Error("Contact not found");
    }
  
    res.status(200).json(contact);
});

//@desc update  contact
//@route PUT /api/contacts/:id
//@access public

const putContact = asyncHandler(async(req,res)=>{

    res.status(200).json({message:`Update contact for ${req.params.id}`});
});
//@desc delete  contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact =asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
});

module.exports={ 
    getContacts,
    getContact,
postContact,
putContact,
deleteContact
};