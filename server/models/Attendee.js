const mongoose = require("mongoose");

const attendeeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  clockInTime: {
    type: Date,
    default: Date.now(),
  },
  isClockedIn: {
    type: Boolean,
    default: false,
  },
  clockOutTime: {
    type: Date,
  },
  isClockedOut: {
    type: Boolean,
    default: false,
  },
});

const Attendee = mongoose.model("attendee", attendeeSchema);

module.exports = Attendee;
