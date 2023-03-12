const express = require("express");
const mongoose = require("mongoose");
const bodyparse = require("body-parser");
const cors = require("cors");

const app = express();
const userRoutes = require("./routes/user");
const offerRoutes = require("./routes/offer");
app.use(cors());
mongoose.connect("mongodb://localhost:27017/offer").then(()=> {
    console.log("Connected to db");
}).catch(()=> {
    console.log("failed to connect to database");
});
app.use(bodyparse.json());
app.listen(8080, ()=> {
    console.log("server started at 8080 port" )
});
app.use("/user", userRoutes);
app.use("/offer", offerRoutes);

