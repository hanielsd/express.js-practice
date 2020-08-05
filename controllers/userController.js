let User = require("./../Models/user");

let userController = {
  async get_users(req, res) {
    let users = await User.find();
    res.status(200).send(users);
  },

  async register_user(req, res) {
    try {
      let bcrypt = require("bcrypt");
      let hashedPassword = await bcrypt.hash("hafi1234", 10);

      let user = new User({
        firstName: "Haftom",
        lastName: "Gwahd",
        gender: "M",
        username: "hafigwahd",
        password: hashedPassword
      });
      const result = await user.save();
      res.status(200).send(result);
    } catch {
      res
        .status(500)
        .send({ error: "Some thing went wrong while registering the user." });
    }
  }
};

module.exports = userController;
