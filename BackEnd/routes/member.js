const express = require("express");
const router = express.Router();
const AllMembers=require("../models/AllMembers")
const { body, validationResult } = require("express-validator");
const members = [
  {
  
    name: 'Shivam Asija',
    email: 'shivam.asija@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
  
    name: 'Kanishka Singh',
    email: 'kanishka.singh@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
  
    name: 'Seemab Shaikh',
    email: 'seemab.shaikh@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
  
    name: 'Abhishek Kumar',
    email: 'abhishek.kumar@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
  
    name: 'Saurabh Ranjan',
    email: 'Saurabh.Ranjan@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
  
    name: 'Tom Van der Sloot',
    email: 'shivam.asija@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
  
    name: 'Shilajeet Ray',
    email: 'kanishka.singh@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
  
    name: 'James McElroy',
    email: 'seemab.shaikh@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
  
    name: 'Davisson Flint',
    email: 'abhishek.kumar@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Nathan Holland',
    email: 'Saurabh.Ranjan@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Andrew Eber',
    email: 'shivam.asija@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Dan Durnell',
    email: 'kanishka.singh@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Luis Soares',
    email: 'seemab.shaikh@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Bryce Williams',
    email: 'abhishek.kumar@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Matthew Sigue',
    email: 'Saurabh.Ranjan@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Ross Pallotta',
    email: 'shivam.asija@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Justin Hamric',
    email: 'kanishka.singh@mandsconsulting.com',
    favouriteTech: 'ReactJs',
    
    name: 'Curtis Ward',
    email: 'seemab.shaikh@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Jacob Sowder',
    email: 'abhishek.kumar@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Nicholas Kennedy',
    email: 'Saurabh.Ranjan@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Nathan Burd',
    email: 'shivam.asija@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Alex Griffin',
    email: 'kanishka.singh@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Danie Zheng',
    email: 'seemab.shaikh@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Maksim Galkin',
    email: 'abhishek.kumar@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Serguei Pisarev',
    email: 'Saurabh.Ranjan@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Noah Adams',
    email: 'shivam.asija@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Nathan Snyder',
    email: 'kanishka.singh@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'Andy Mason',
    email: 'seemab.shaikh@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
  {
    
    name: 'John Macauley',
    email: 'abhishek.kumar@mandsconsulting.com',
    favouriteTech: 'ReactJs',
  },
]
router.get("/", async (req,res) => {
  try {
     const members = await AllMembers.find();
      res.json(members);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("intrenal error");
  }
});
router.get("/member/create", async (req, res) => {
  // res.json(members)
  try {
  //  const {name,email,technology}=req.body
   members.map(async (item)=>{
       const newmember = await AllMembers.insertMany(item);
   })
      // const members = await AllMembers.find();
      res.json(newmember);
    
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