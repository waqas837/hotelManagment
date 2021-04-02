const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://waqasKhan:bughlani1122@cluster0.agwp7.mongodb.net/images?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(`DB connection failed ${err}`));
const images = new mongoose.Schema({
  image: {
    type: String,
  }
});
module.exports = new mongoose.model("Image", images);
