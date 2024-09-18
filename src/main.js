import express from "express";
import morgan from "morgan";
import { sequelize } from "./config/db.config.js";
import routes from "./routes/index.routes.js";
import bodyParser from "body-parser"
const app = express();

app.use(morgan("tiny"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use(express.json());

sequelize
  .sync({ logging: false })
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1", routes);

app.all("*", (req, res) => {
  res.send({
    message: "Invalid request",
  });
});

app.listen(2000, "localhost", () => {
  console.log("Server running on port : ", 2000);
});
