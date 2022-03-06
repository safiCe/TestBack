const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true
  },
  companyName:{
    type:String,
    required:true
  },
  telefon: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false 
  },
  userId:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'user',
    required:true
  }
});

const customer = mongoose.model("customer", customerSchema);

module.exports = customer;