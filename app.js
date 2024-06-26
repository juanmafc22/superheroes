const express = require("express");
const app = express();
const serverPort = 3030;

app.set("view engine", "ejs");
app.use(express.static("public"));

const indexRouter = require("./routes/index.router");

app.listen(process.env.PORT || serverPort, () => {
    console.log("Express corriendo OK en el puerto", serverPort);
})

app.use("/", indexRouter);

// add a genral route for 404 errors
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})
