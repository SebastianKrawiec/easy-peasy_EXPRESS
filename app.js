const express = require("express");
const app = express();

app.listen(3000, ()=> console.log("servidor corriendo en puerto 3000"));

const rutaEasy = require("./routes/easy-peasy");
const rutaMovies = require("./routes/movies");
/* const rutaFaqs = require("./routes/faqs") */
/* const rutaMovies = require("./") */

app.use("/", rutaEasy);
app.use("/peliculas", rutaMovies);
/* app.use("/faqs", rutaFaqs); */
