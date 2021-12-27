const mongoose = require("mongoose");

const ShareRecordingSchema = new mongoose.Schema({
  userEmail:{
    type:String
  },
  recording:{
    type:Object
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const ShareRecording = mongoose.model("ShareRecording", ShareRecordingSchema);
module.exports = ShareRecording;
