const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  uuid: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const videoModel = mongoose.model('video', videoSchema);
module.exports = videoModel;
