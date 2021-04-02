const User = require("../Database/userSchema");
const saveData = async (req, res) => {
  const image = req.body;
  try {
    const dataCheck = new User(image);
    await dataCheck.save();
  } catch (error) {
    console.log(`error during getData ${error}`);
    console.log(error);
    res.json(error);
  }
};
//get data
const getData = async (req, res) => {
  try {
    const data = await User.find();
    console.log(data)
    res.json({data})
   
  } catch (error) {
    console.log(`error during get the data ${error}`);
    console.log(error);
    res.json(error);
  }
};
module.exports = { saveData,getData };
