const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const questions = require("./question.js");
const advanced = require("./advancedSearch.js");


app.get('/questions', function(request, response) {
  response.json(questions);
})

app.get('/advanced', function(request, response) {
  response.json(advanced);
});

let suggestions = [];

app.post('/suggestions', function(request, response) {
  suggestions.push(request.body);
  response.json({
    "Success! Thank you for suggesting": request.body
  })
});

app.get('/suggestions', function(request, response) {
  response.json(suggestions);
});


app.listen(process.env.PORT ||3000);
