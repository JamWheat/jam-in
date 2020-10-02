const Event = require("../models/event");

module.exports = {
  index,
  create,
  update,
  delete: deleteOne
};

function index(req, res) {
  Event.find({}).then((events) => res.json(events));
}

function create(req, res) {
  req.body.createdBy = req.user._id
  req.body.ticked = (req.body.ticketed === 'true')
  Event.create(req.body)
    .then(event => { res.json(event) })
    .catch(err => { res.json(err) })
}

function update(req, res) {
  Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(event => { res.json(event) })
    .catch(err => { res.json(err) })
}

function deleteOne(req, res) {
  Event.findByIdAndDelete(req.params.id)
    .then(project => { res.json(project) })
    .catch(err => { res.json(err) })
}