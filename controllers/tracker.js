const Client = require("../models/Client");

module.exports = {
  getProfile: async (req, res) => {
    try {
      res.render("profile.ejs", {user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
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
  getClientList: async (req, res) => {
    try {
      const clientList = await Client.find().sort({ createdAt: "desc" }).lean();
      // const clients = await Client.findById(req.params.id);
      res.render("clientList.ejs", {clients: clientList}); //check
    } catch (err) {
      console.log(err);
    }
  },
  addClient: async (req, res) => {
    try {
      await Client.create({
        name: req.body.name,
        birthdate: req.body.birthdate,
        goal: req.body.goal,
        data: req.body.data,
      });
      console.log("Client has been added!");
      res.redirect("/clientList"); //change
    } catch (err) {
      console.log(err); 
    }
  }
};
