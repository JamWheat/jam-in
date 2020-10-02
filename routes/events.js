const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');

/*---------- Public Routes ----------*/
router.get("/", eventsCtrl.index);
router.put('/filter', eventsCtrl.filter)
router.get('/event/:id', eventsCtrl.getOne)


/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.get('/userhost/:id', checkAuth, eventsCtrl.getUserHosting)
router.get('/useratt/:id', checkAuth, eventsCtrl.getUserAttending)
router.post('/', checkAuth, eventsCtrl.create)
router.put('/:id', checkAuth, eventsCtrl.update)
router.delete('/:id', checkAuth, eventsCtrl.delete)


/*---------- Auth Checker ----------*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;