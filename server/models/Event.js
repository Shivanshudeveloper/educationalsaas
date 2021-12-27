const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Attende: {
    type: String,
    default:"https://evaliain-video.vercel.app/30d18002-89c3-4e98-ba2b-4541173377af",
  },
  hostUrl:{
    type:String,
    default:"https://evaliain-video.vercel.app/79441dc6-0cd7-4e5c-9342-91beb66d2fa2"
  },
  startDate:{
    type:String
  },
  endDate:{
    type:String
  },
  startTime:{
    type:String,
    default:"00:00am"
  },
  endTime:{
    type:String,
    default:'00:00am'
  },
  description: {
    type: String,
  },
  recurrenceType:{
    type:String,
    default:"Doesn't repeat"
  },
  recurrenceValue:{
    type:Object
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
