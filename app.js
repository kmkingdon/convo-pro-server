const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const questions = require("./question.js");
const advanced = require("./advancedSearch.js");


app.get('/questions', function(request, response) {
  response.json(questions);
})

app.get('/advanced', function(request, response) {
  response.json(advanced);
});


app.listen(process.env.PORT ||3000);
