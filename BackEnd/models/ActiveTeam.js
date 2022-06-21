const mongoose = require("mongoose");
const { Schema } = mongoose;
const ActiveTeamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  favouriteTech: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  ScrumMaster: {
    type: Boolean,
    required: true,
  },
  teamroles: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("ActiveTeam", ActiveTeamSchema);
