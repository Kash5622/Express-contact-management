const express= require("express");
const router=express.Router();
const {getContacts,postContacts,getContact,putContact,deleteContact} =require("../controllers/contactController")

router.route("/").get(getContacts)
router.route("/").post(postContacts)
router.route("/:id").get(getContact)
router.route("/:id").put(putContact)
router.route("/:id").delete(deleteContact)

module.exports = router;