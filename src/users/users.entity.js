const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: String,
  date: { type: Date, default: Date.now },
  name: String,
  surname: String,
  email: { type: String, lowercase: true, trim: true },
  phone: String,
  password: String,
  birthdaydate: Date,
  updateNewsletter: Boolean,
  roles: [],
  auth: {
    email: {
      valid: { type: Boolean, default: false },
    },
    facebook: {
      userid: String,
    },
    gmail: {
      userid: String,
    },
  },
  settings: {},
  photos: {
    profilePic: {},
    gallery: [{}],
  },
  survey: [
    {
      _id: false,
      question: String,
      anwsers: [],
    },
  ],
  use_free_trial: Boolean,
  my_happenings: [],
  my_favorite_happening: [],
  membership:{
	  code:String,
	  start_day:Date,
	  expire_day:Date,
  }
});

const Users = mongoose.model('users', UserSchema);

module.exports = { UserSchema, Users };
