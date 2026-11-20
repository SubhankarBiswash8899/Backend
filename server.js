const app = require('./src/app');
const dotenv = require('dotenv').config();
const connaetdb = require("./src/db/db.js")
const cookieParser = require('cookie-parser');
app.use(cookieParser());
// call db
connaetdb()


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
