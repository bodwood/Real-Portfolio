const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  message: String,
  date: Date
});


module.exports = mongoose.models.Message ?? mongoose.model('Message', MessageSchema);