const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  desc: String,
  dateTime: Date,
  // time: Date,
  createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
  ticketed: Boolean,
  catagory: String,
  url: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);