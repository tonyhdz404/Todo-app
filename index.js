const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();
const methodOverride = require("method-override");

require("dotenv").config();
const todoData = [
  {
    done: true,
    text: "Complete Online JavaScript Course",
  },
  {
    done: false,
    text: "Read for 30 mins",
  },
  {
    done: false,
    text: "Workout for 1hr",
  },
  {
    done: false,
    text: "Walk Dog",
  },
];

//* Reading Static Files
app.use(express.static("public"));
//* Reading the body of a req
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//* Setting up EJS as our View Engine
// views folder path
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// process.env
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server Running on Port: ${port} 🟢`);
});

app.get("/", (req, res) => {
  res.render("index", { data: todoData });
});

app.post("/", (req, res) => {
  console.log(req.body);

  res.redirect("/");
});

app.patch("/:id", (req, res) => {
  console.log(req.params);
  res.redirect("/");
});
