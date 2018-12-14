const Pet = require("./models");

module.exports = {
  all: function(req, res) {
    Pet.find({})
      .sort('type')
      .then(data => {
        res.json({ message: "Success", data: data });
      })
      .catch(err => {
        res.json({ message: "Error", error: err });
      });
  },
  show: function(req, res) {
    Pet.findById(req.params.id)
      .then(data => {
        res.json({ message: "Success", data: data });
      })
      .catch(err => {
        res.json({ message: "Error", error: err });
      });
  },
  create: function(req, res) {
    Pet.create(req.body)
      .then(data => {
        res.json({ message: "Success", data: data });
      })
      .catch(err => {
        res.json({ message: "Error", error: err });
      });
  },
  update: function(req, res) {
    Pet.findByIdAndUpdate({ _id: req.params.id }, req.body, {runValidators: true, context: 'query'})
      .then(data => {
        res.json({ message: "Success", data: data });
      })
      .catch(err => {
        res.json({ message: "Error", error: err });
      });
  },
  destroy: function(req, res) {
    Pet.findByIdAndDelete(req.params.id)
      .then(data => {
        res.json({ message: "Success" });
      })
      .catch(err => {
        res.json({ message: "Error", error: err });
      });
  },
  like: function(req, res) {
    Pet.findByIdAndUpdate(req.params.id, {"likes": req.body.likes})
    .then(data => {
      res.json({ message: "Success", data: data });
    })
    .catch(err => {
      res.json({ message: "Error", error: err });
    });
  },

  angular: function(req, res, next) {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  }
};
