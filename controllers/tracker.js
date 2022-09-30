const Client = require("../models/Client");

module.exports = {
  getTracker: async (req, res) => {
    try {
      const tracker = await Client.findById(req.params.id);
      res.render("tracker.ejs", {tracker: tracker});
        // client: req.user.name, client: birthdate, client: goals, client: data, client: createdAt}); //check on this
    } catch (err) {
      console.log(err);
    }
  }
};
