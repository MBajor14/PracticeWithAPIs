var express = require("express");
var app = express();
var Twitter = require("twitter");
var bodyParser = require("body-parser");

var client = new Twitter({
    consumer_key: 'nVZgI0PBS3xOIKfuXKqBgKj1q',
    consumer_secret: 'qLVp6FlDh3cT1euJ7NvNQk5S28B1TdEcCbyzmxaoWNzyhw0H7N',
    access_token_key: '720751681470885888-KeFeo4l7Bme05ZcZYyAxf6EUI3EUtIB',
    access_token_secret: 'aUOIgxJvGhCWoQtOfVW0719jb41pNFY3nCEQRBSzucp4S'
  });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.get("/search", function(req, res){
    res.send("Reach /search get route");
});

client.get('search/tweets', {q: '#rangers', count: 20}, function(error, tweets, response) {
    if(error) throw error;
    tweets.statuses.forEach(function(tweet){
        console.log(tweet.text);
    });

 });

app.listen(8000, function(){
    console.log("Server Running");
});




/* app.post("/search", function(req, res){
    var searchKey = req.body.key;
    var stream = client.stream('statuses/filter', {track: searchKey});
    stream.on('data', function(event) {
        console.log(event && event.text);
    });
    
    stream.on('error', function(error) {
        throw error;
    });

    res.redirect("/search");
}); */