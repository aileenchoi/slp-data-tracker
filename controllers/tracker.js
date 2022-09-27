const Client = require("../models/Client");

module.exports = {
  getClient: async (req, res) => {
    try {
      const clients = await Client.findById(req.params.id);
      res.render("client.ejs", {clients: clients});
        // client: req.user.name, client: birthdate, client: goals, client: data, client: createdAt}); //check on this
    } catch (err) {
      console.log(err);
    }
  },
  // get all clients method
  getClients: async (req, res) => {
    try {
      const clients = await Client.find().sort({ createdAt: "desc" }).lean();
      // const clients = await Client.findById(req.params.id);
      res.render("clients.ejs", {clients: clients}); //check
    } catch (err) {
      console.log(err);
    }
  }
};
