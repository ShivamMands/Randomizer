const mongoose = require("mongoose");
const { Schema } = mongoose;
const a = "abnc"
const MemberSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
   technology: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,  },
});
module.exports = mongoose.model("AllMember", MemberSchema);
