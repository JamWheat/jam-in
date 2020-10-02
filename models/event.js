const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  desc: String,
  dateTime: Date,
  zone: String,
  host: {type: Schema.Types.ObjectId, ref: 'User'},
  image: String,
  ticketed: Boolean,
  catagory: String,
  // url: String,
  canceled: {type: Boolean, default: false},
  attending: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);