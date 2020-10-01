const Event = require("../models/user");

module.exports = {
  index,
};

function index(req, res) {
  Event.find({}).then((users) => res.json(users));
}