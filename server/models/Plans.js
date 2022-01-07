const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique:true
  },
  type:{
        type:String
  },
  price:{
        type:String
  },
  active:{
    type:Boolean
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Plan = mongoose.model("Plan", PlanSchema);
module.exports = Plan;
