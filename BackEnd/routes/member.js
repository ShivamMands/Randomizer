const express = require("express");
const router = express.Router();
const AllMembers = require("../models/AllMembers");
const { body, validationResult } = require("express-validator");
router.get("/", async (req, res) => {
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
    const { name, email, favouriteTech } = req.body;
    const newmember = await AllMembers.insertMany({
      name: name,
      email: email,
      favouriteTech: favouriteTech,
    });
    const members = await AllMembers.find();
    res.json(members);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("intrenal error");
  }
});
router.post("/member/update", async (req, res) => {
  try {
    const { id, name, email, favouriteTech } = req.body;
    const newData = {};
    if ((id, name && email && favouriteTech)) {
      newData.name = name;
      newData.email = email;
      newData.favouriteTech = favouriteTech;
    }
    ////////////////find a note to be updated and update/////////////
    let member = await AllMembers.findById({ _id: id });
    console.log("member: ", member);
    if (!member) {
      return res.status(404).send("not found");
    }
    const newMember = await AllMembers.findByIdAndUpdate(
      id,
      { $set: newData },
      { new: true }
    );
    const members = await AllMembers.find();
    res.json(members);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("intrenal error");
  }
});
router.post("/member/delete", async (req, res) => {
  try {
    // res.json({name:'abhishek'})
    const { id } = req.body;
    const deleteditem = await AllMembers.findByIdAndDelete(id);
    console.log("deleteItem: ", deleteditem);
    const members = await AllMembers.find();
    res.json(members);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("intrenal error");
  }
});
module.exports = router;
