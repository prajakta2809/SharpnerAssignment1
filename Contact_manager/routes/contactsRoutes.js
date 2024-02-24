const express=require("express");
const router=express.Router();
const {getContacts,
    getContact,
postContact,
putContact,
deleteContact}=require("../controllers/contactController");


router.route("/").get(getContacts).post(postContact);



router.route("/:id").get(getContact).put(putContact).delete(deleteContact);






module.exports=router;