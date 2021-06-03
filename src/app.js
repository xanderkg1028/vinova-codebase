require("dotenv");
import express from "express";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import routers from "./routers";
const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(logger("dev"));
app.use(
  express.json({
    limit: "20mb"
  })
);
app.use(
  express.urlencoded({
    extended: false,
    limit: "20mb"
  })
);

// set routers
app.use("/api", routers);

// handling error
app.use((err, req, res, next) => {
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log("Server listening on " + PORT);
});
