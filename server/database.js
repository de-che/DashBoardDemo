const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  process.env.ATLAS_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
)
  // eslint-disable-next-line no-console
  .then(() => console.log('MongoDB database connection established successfully'))
  // eslint-disable-next-line no-console
  .catch(err => console.log(err));
