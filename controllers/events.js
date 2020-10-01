const Event = require("../models/event");

module.exports = {
  index,
  create
};

function index(req, res) {
  Event.find({}).then((users) => res.json(users));
}

function create(req, res) {
  req.body.createdBy = req.user._id
  req.body.ticked = (req.body.ticketed === 'true')
  Event.create(req.body)
    .then(event => { 
      console.log(event)
      res.json(event) 
    })
    .catch(err => { res.json(err) })
}