const express = require("express");
const router = express.Router();
const { singin, signup,getData,deleteUser,udpateUser,findSingleUser } = require("./userLogics");
router.post("/signup", signup);
router.post("/signin", singin);
router.get("/getData",getData);
router.delete("/deleteUser/:id",deleteUser);
router.put("/udpateUser/:id",udpateUser);
router.get("/findSingleUser/:id",findSingleUser)
module.exports = router;
