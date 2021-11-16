const express = require('express');
const router = express.Router();
const gamesStats = require('../services/gameStats');

router.get('/:game/stats', async function(req, res, next) {
  try {
    const game = req.params["game"]
    res.json(await gamesStats.getStats(req.query.page, game));
  } catch (err) {
    console.error('Error while getting game stats', err.message);
    next(err);
  }
});

module.exports = router;