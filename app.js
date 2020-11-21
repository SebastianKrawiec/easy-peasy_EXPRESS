const express = require("express");
const { userInfo } = require("os");
const app = express();

app.listen(3000, ()=> console.log("servidor corriendo en puerto 3000"));

const rutaEasy = require("./routes/easy-peasy");

app.use("/", rutaEasy);