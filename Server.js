const express       = require('express');
const mongoose      = require('mongoose');
const bodyParser    = require('body-parser');
const morgan        = require('morgan');
const dotenv        = require('dotenv');

const app = express();

app.use(express.json());

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 3000;

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (req, res) => {
    console.log("Connected to the database.");
  }
);


app.listen(PORT, () => {
    console.log('server is up and running on port : '+PORT);
})