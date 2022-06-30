import { ReadOutput } from "./ReadOutput.js";
import express from "express";
import * as http from "http";

const app = express();
const port = process.env.PORT || 3003
var server = http.createServer(app);

var read = new ReadOutput();


server.listen(port, () => {
    console.log(read.toJSON());
  })

  app.get('/', (req, res) => {
    res.json({
        read
    })
  })


