const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const morgan = require('morgan'); 


const app = express();
connectDB();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "development") {
  app.use(morgan('dev'));
  
}
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

app.use('/api/users', require('./routes/users'));
app.use('/api/comment', require('./routes/comment'));
app.use('/api/like', require('./routes/like'));
app.use('/api/favorite', require('./routes/favorite'));

// Send every other request to the React app
  // Set static folder
app.use(express.static("client/build"));

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
