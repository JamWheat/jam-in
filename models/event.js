const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  desc: String,
  date: String,
  time: String,
  createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
  ticketed: Boolean,
  catagory: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);