const mongoose = require("mongoose");
const { Schema } = mongoose;
const MemberSchema = new Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("AllMember", MemberSchema);
