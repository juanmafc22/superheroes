const express = require("express");
const app = express();
const serverPort = 3030;

app.set("view engine", "ejs");
app.use(express.static("public"));

const indexRouter = require("./routes/index.router");

app.listen(serverPort, () => {
    console.log("Express corriendo OK en el puerto", serverPort);
})

app.use("/", indexRouter);

