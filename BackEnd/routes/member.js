const express = require("express");
const router = express.Router();
const AllMembers=require("../models/AllMembers")
const { body, validationResult } = require("express-validator");
router.get("/", async (req,res) => {
  try {
     const members = await AllMembers.find();
      res.json(members);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("intrenal error");
  }
});
router.post("/member/create", async (req, res) => {
  try {
   const {name,email,technology}=req.body
   const newmember = await AllMembers.insertMany({name:name,email:email,favouriteTech:technology});
      const members = await AllMembers.find();
      res.json(members);
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("intrenal error");
  }
});
router.put("/member/update", async (req, res) => {
  try {
    res.json({name:'abhishek'})
  } catch (error) {
    console.error(error.message);
    res.status(500).send("intrenal error");
  }
});
router.delete("/member/delete/:id", async (req, res) => {
  try {
    // res.json({name:'abhishek'})
    const {id}=req.params
    const deleteditem = await AllMembers.findByIdAndDelete(id);
     const members = await AllMembers.find();
      res.json(members);
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("intrenal error");
  }
});
module.exports=router