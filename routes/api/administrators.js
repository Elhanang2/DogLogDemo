const express = require("express");
const router = express.Router();

// @route     GET api/dogs/test
// @desc      Tests dogs route
// @access    Public

router.get("/test", (req, res) =>
  res.json({
    msg: "administrators works"
  })
);

module.exports = router;