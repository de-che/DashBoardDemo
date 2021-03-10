const mongoose = require('mongoose');

const { Schema } = mongoose;

const healthScoreSchema = new Schema({
  date: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  food: {
    type: Object,
    required: true,
  },
  movement: {
    type: Object,
    required: true,
  },
  sleep: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('HealthScore', healthScoreSchema, 'healthScore');
