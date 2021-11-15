
const router = require("express").Router();
const db = require("./db");

router.use("/stats", (req, res) => {
  (async () => {
      const stats = await db.select2048Stats();
      res.send(stats);
  })();
});

module.exports = router;
