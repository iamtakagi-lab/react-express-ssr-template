import express from "express";
import path from "path"
import { renderApp } from "./app";

const app = express();

app.get("/", async (req, res, next) => {
  res.send(renderApp())
});

app.use(express.static(path.resolve(__dirname, "..", "static")));
app.listen(process.env.PORT || 8080);