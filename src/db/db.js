const mongoose = require("mongoose");

const connactdb = async () => {
  try {
    /*
    * - connating db
    * - local
    */
    await mongoose.connect(process.env.GMONO_URI);
    console.log("db connactad");
  } catch (e) {
    console.log(e);
    process.exit();
  }
};
module.exports = connactdb;