const express = require('express');

const router = express.Router();
const HealthScore = require('../model/healthScoreModel');

router.get('/', async (req, res) => {
  try {
    const healthScore = await HealthScore.find().lean();

    const result = [];
    Object.keys(healthScore[0]).slice(1).forEach(e => {
      let newObj = {};
      newObj = healthScore[0][e];
      newObj.date = e;
      result.push(newObj);
    });

    res.json(result);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    res.status(500);
  }
});

module.exports = router;
