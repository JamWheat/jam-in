const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get("/", checkAuth, eventsCtrl.index);
router.post('/', checkAuth, eventsCtrl.create)


/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;