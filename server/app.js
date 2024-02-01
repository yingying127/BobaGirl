const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
module.exports = app;

// const dotenv = require('dotenv')
// dotenv.config();

// const itemsPool = require('../DBConfig.js')

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());

// auth and api routes
app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html")),
);

// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// postman items for database 
// app.get('/api/users', async(req, res) => {
//   try {
//     const allUsers = await itemsPool.query(
//       'SELECT & FROM users'
//     )
//     res.json({ allUsers })
//   }
//   catch(error) {
//     console.log(error);
//     res.status(500).send(error.message)
//   }
// })

// app.get('/api/users', (req, res) => {
//   res.send('sending list of items from db')
// })

// app.post('/api/users', (req, res) => {
//   res.status(201).send('sent data to db')
// })

// app.post('/api/users', async(req, res) => {
//   const { description } = req.body;
//   try {
//     const newUser = await itemsPool.query(
//       'INSERT INTO users ('
//     )
//   }
// })

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
