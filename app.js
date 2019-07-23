//cst336-bprovansal.codeanyapp.com:8081/ ROOT DIRECTORY
//JS VARIABLES - FAKER
var faker = require("faker");
var fakeName = faker.name.findName();
var fakeIndexArr = new Array();
var fakeHistoryArr = new Array();
//EXPRESS
const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
fakeIndex();
fakeHistory();
app.get("/", function(req, res) {
  //res.send("It Works!");
  res.render("Index.html", 
             {fakeName: fakeIndexArr[0],
              fakeJob: fakeIndexArr[1],
              fakeDep: fakeIndexArr[2],
              fakeComp: fakeIndexArr[3]});
  
});

app.get("/history", function(req, res) {
  //res.send("History Page");
  res.render("history.html",
             {fakeMonth: fakeHistoryArr[0],
              fakeAdj1: fakeHistoryArr[1],
              fakeName: fakeHistoryArr[2],
              fakeVerb1: fakeHistoryArr[3],
              fakeAdj2: fakeHistoryArr[4],
              fakeNoun1: fakeHistoryArr[5],
              fakeAbbr: fakeHistoryArr[6],
              fakeNoun2: fakeHistoryArr[7],
              fakeVerb2: fakeHistoryArr[8]});
});

app.get("/applications", function(req, res) {
  //res.send("Applications Page");
  res.render("applications.html");
});

app.get("/development", function(req, res) {
  res.render("development.html");
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Express Server is running.");
});
/*app.listen("8081", "0.0.0.0", function() {
  console.log("Express Server is running.");
});*/

function fakeIndex() {
  fakeIndexArr.push(faker.name.findName());
  fakeIndexArr.push(faker.fake("{{name.jobTitle}}"));
  fakeIndexArr.push(faker.fake("{{commerce.department}}"));  
  fakeIndexArr.push(faker.fake("{{company.companyName}} {{company.companySuffix}}"));
}

function fakeHistory() {
  fakeHistoryArr.push(faker.fake("{{date.month}}"));
  fakeHistoryArr.push(faker.fake("{{random.word}}"));
  fakeHistoryArr.push(faker.fake("{{name.findName}}"));
  fakeHistoryArr.push(faker.fake("{{hacker.verb}}"));
  fakeHistoryArr.push(faker.fake("{{hacker.adjective}}"));
  fakeHistoryArr.push(faker.fake("{{hacker.noun}}"));
  fakeHistoryArr.push(faker.fake("{{hacker.abbreviation}}"));
  fakeHistoryArr.push(faker.fake("{{hacker.noun}}"));
  fakeHistoryArr.push(faker.fake("{{hacker.ingverb}}"));
  
}
