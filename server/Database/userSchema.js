const mongoose = require("mongoose");
const validator = require('validator');
mongoose
  .connect(
    "mongodb://localhost/userSigns",
// mongodb+srv://waqasKhan:bughlani1122@cluster0.agwp7.mongodb.net/useSingnup?retryWrites=true&w=majority
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify:false,
    }
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(`DB connection failed ${err}`));
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
const userData = new mongoose.Schema({
  email: {
    unique:true,
    type: String,
    validate(val) {
      if (!validator.isEmail(val)) throw new Error("emailWrongPattern");
    },
    required:true
  },
  password: {
    type: String,
    required:true
  },
  cpassword: {
    type: String,
    required:true
  },
});
module.exports = new mongoose.model("usersignup", userData);
