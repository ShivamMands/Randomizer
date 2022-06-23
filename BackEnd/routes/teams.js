const express = require("express");
const router = express.Router();
const PrevTeam = require("../models/PrevTeam");
const ActiveTeam = require("../models/ActiveTeam");
const AllMembers = require("../models/AllMembers");
const { body, validationResult } = require("express-validator");
router.post("/create", async (req, res) => {
  try {
    const members = await AllMembers.find();
    const arr = members;
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    const arr1 = [];
    const arr2 = [];
    let pick = "";
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        arr1.push(arr[i]);
      } else {
        arr2.push(arr[i]);
      }
    }
    const allTeams = [...arr1, ...arr2];
    const dataaaa = {
      teamA: arr1,
      teamB: arr2,
    };
    const alldata = await ActiveTeam.find();
    if (alldata.length === 0) {
      console.log("this is all data", alldata);
      arr1.map(async (data) => {
        await ActiveTeam.insertMany({
          name: data.name,
          email: data.email,
          favouriteTech: data.favouriteTech,
          team: "teamA",
          ScrumMaster: false,
          teamroles: "Presenting",
        });
      });
      arr2.map(async (data) => {
        await ActiveTeam.insertMany({
          name: data.name,
          email: data.email,
          favouriteTech: data.favouriteTech,
          team: "teamB",
          ScrumMaster: false,
          teamroles: "Questioner",
        });
      });
      const bewAllata = await ActiveTeam.find();
      res.json(bewAllata);
    } else {
      await PrevTeam.deleteMany({
        $or: [{ team: "teamA" }, { team: "teamB" }],
      });
      alldata.map(async (item) => {
        await PrevTeam.insertMany(item);
      });
      const savedTeamA = alldata.filter((x) => x.team === "teamA");
      const isExist = getDifference(arr1, savedTeamA);
      console.log("difference array: ", isExist);
      if (isExist.length > 0) {
        await ActiveTeam.deleteMany({
          $or: [{ team: "teamA" }, { team: "teamB" }],
        });
        arr1.map(async (data) => {
          await ActiveTeam.insertMany({
            name: data.name,
            email: data.email,
            favouriteTech: data.favouriteTech,
            team: "teamA",
            ScrumMaster: false,
            teamroles: "Presenting",
          });
        });
        arr2.map(async (data) => {
          await ActiveTeam.insertMany({
            name: data.name,
            email: data.email,
            favouriteTech: data.favouriteTech,
            team: "teamB",
            ScrumMaster: false,
            teamroles: "Questioner",
          });
        });
        const finalData = await ActiveTeam.find();
        res.json(allTeams);
      } else {
        res.json({ error: "team already exist" });
      }
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("intrenal error");
  }
});
router.get("/currentTeam", async (req, res) => {
  const activeData = await ActiveTeam.find();
  res.json(activeData);
});

function getDifference(array1, array2) {
  return array1.filter((object1) => {
    return !array2.some((object2) => {
      return object1.name === object2.name;
    });
  });
}
router.get("/prev", async (req, res) => {
  const prevteam = await PrevTeam.find();
  res.json(prevteam);
});
router.post("/scrum", async (req, res) => {
  const { _id, name, email, favouriteTech } = req.body;
  try {
    let check = await ActiveTeam.find();
    check.map(async (item) => {
      const updatedata = await ActiveTeam.findByIdAndUpdate(
        item._id,
        { $set: { ScrumMaster: false } },
        { new: true }
      );
    });
    check.map((valu) => {
      if (valu.name === name && valu.ScrumMaster === true) {
        res.status(500).send("Scrum Master Alredy exist");
      }
    });
    //////////////find a member to be updated and update/////////////
    let member = await ActiveTeam.find({ name: name });
    const a = member[0]._id;
    if (!member) {
      res.status(500).send("ScrumMaster does not exist in database");
    }
    const updatedata = await ActiveTeam.findByIdAndUpdate(
      a,
      { $set: { ScrumMaster: true } },
      { new: true }
    );
    res.json(updatedata);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("intrenal error");
  }
});
router.get("/toggleTeam", async (req, res) => {
  const toggledata = await ActiveTeam.find();
  toggledata.map(async (item) => {
    if (item.teamroles === "Presenting") {
      await ActiveTeam.findByIdAndUpdate(
        item._id,
        { $set: { teamroles: "Questioner" } },
        { new: true }
      );
    }
    if (item.teamroles === "Questioner") {
      await ActiveTeam.findByIdAndUpdate(
        item._id,
        { $set: { teamroles: "Presenting" } },
        { new: true }
      );
    }
  });
  const finaldata = await ActiveTeam.find();
  res.json(finaldata);
});

router.get("/getScrumMaster", async (req, res) => {
  const currentScrum = await ActiveTeam.find();
  let i = 0;
  let currentScrumMaster = {};
  let previousScrumMaster = {};
  if (currentScrum.length > 0) {
    currentScrum.map((item) => {
      if (item.ScrumMaster === true) {
        i = i + 1;
        currentScrumMaster = item;
      }
    });
  }
  // res.json(currentScrumMaster)
  const prevScrum = await PrevTeam.find();
  let j = 0;
  if (prevScrum.length > 0) {
    prevScrum.map((item) => {
      if (item.ScrumMaster === true) {
        j = j + 1;
        previousScrumMaster = item;
        // res.json(item)
      }
    });
  }
  if (i === 0 && j === 0) {
    res.status(500).send({
      currentScrumMaster:
        "Current scrumMaster does not exist in prevTeam table",
      previousScrumMaster: "Previous scrumMaster does not exist in db",
    });
  } else {
    if (i === 0) {
      res.status(500).send({
        currentScrumMaster: "Current scrumMaster does not exist in db",
      });
    } else {
      if (j === 0) {
        res.status(200).send({
          currentScrumMaster: currentScrumMaster,
          previousScrumMaster: "Previous scrumMaster does not exist in db",
        });
      } else {
        res.json({
          currentScrumMaster: currentScrumMaster,
          previousScrumMaster: previousScrumMaster,
        });
      }
    }
  }
});

module.exports = router;
