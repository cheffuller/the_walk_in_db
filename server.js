const express = require("express");
// const cors = require('cors');
const sequelize = require("./models/index.js");
require("dotenv").config();

const app = express();

// var corsOptions = {
//   origin: 'http://localhost:4200' // URL of the frontend
// };
// app.use(cors(corsOptions));

app.use(express.json()); // parsing application/json
app.use(express.urlencoded({ extended: true })); // parsing application/x-www-form-urlencoded

require("./routes/company.routes.js")(app);
require("./routes/address.routes.js")(app);
require("./routes/user.routes.js")(app);
require("./routes/cart.routes.js")(app);
require("./routes/delivery.routes.js")(app);
require("./routes/vendor.routes.js")(app);
require("./routes/product.routes.js")(app);

const PORT = process.env.PORT || 8080; // Port

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

sequelize.sync({force:true}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});
