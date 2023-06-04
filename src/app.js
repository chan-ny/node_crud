const express = require("express");
const app = express();
const { sequelize } = require("./config/index");


app.use("/api", require("./router/index"));

// sequelize.sync({ force: false }, () => {
//   app.listen(process.env.PORT || 3000, () => {
//     console.log("Server runing Port 3000");
//   });
// });

app.listen(process.env.PORT || 3000, () => {
  console.log("Server runing Port 3000");
});
