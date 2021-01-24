const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  lastName: {
    type: String,
    trim: true,
    lowercase: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model("Customer", customerSchema);
