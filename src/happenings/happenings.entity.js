const mongoose = require('mongoose');

const HappeningSchema = new mongoose.Schema({
  id: String,
  date_created: { type: Date, default: Date.now },
  title: String,
  short_desciption: String,
  long_description: String,
  images: {
    corver: String,
    thumb: String,
  },
  featured: Boolean,
  gallery: [
    {
      caption: String,
      url: String,
    },
  ],
  category: [],
  tags: [],
  price: {
    membership: {
      value: Number,
      stripe: String,
    },
    non_membership: {
      value: Number,
      stripe: String,
    },
  },
  locations: [],
  slug: String,
  order: Number,
  start_time: Date,
  repeat: {
    recurrance: String,
    separation_count: Number,
    day_of_week: [],
    day_of_month: [],
    end_date: Boolean,
    occurences: [
      {
        date: Date,
        title: String,
        desciption: String,
      },
    ],
  },
});

const Happenings = mongoose.model('happenings', HappeningSchema);

module.exports = { HappeningSchema, Happenings };
