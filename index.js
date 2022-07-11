import { GenerateOutput } from "./GenerateOutput.js";
import express from "express";
import * as http from "http";

const app = express();
const port = process.env.PORT || 3009
var server = http.createServer(app);

var read = new GenerateOutput();


server.listen(port, () => {
  read.outputOverTime(5000)
  })

  app.get('/output', (req, res) => {
    res.json({
        read
    })
  })


