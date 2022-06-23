import bodyParser from "body-parser";
import express from "express";

import controllers from "./controllers";

const app = express();
const port: number = 5000;

app.use(bodyParser.json());
app.use(controllers);
app.listen(port, () => {
  console.log(`🚀 Mock API running at http://localhost:${port}`);
});
