const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

dotenv.config();

const mainApp = express();
const PORT = process.env.PORT ?? 3000;

mainApp.use(morgan("dev"));
mainApp.use(cors());
mainApp.use(express.json());

mainApp.use("/", require("./modules/shortener/shortener.module"));

const apiRouter = express.Router();

apiRouter.use("/hello", require("./modules/hello/hello.module"));
apiRouter.use("/contact", require("./modules/contact/contact.module"));

mainApp.use("/api", apiRouter);

// public
mainApp.use(express.static(path.join(__dirname, "public")));

const dir_SPA = "frontend/browser";
// const dir_SPA = "reactjs";
mainApp.use(express.static(path.join(__dirname, dir_SPA)));
mainApp.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, dir_SPA, "index.html"));
});

mainApp.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
