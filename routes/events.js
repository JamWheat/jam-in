const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');

/*---------- Public Routes ----------*/
router.get("/", eventsCtrl.index);
router.get('/filter', eventsCtrl.filter)


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post('/', checkAuth, eventsCtrl.create)
router.put('/:id', checkAuth, eventsCtrl.update)
router.delete('/:id', checkAuth, eventsCtrl.delete)


/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;