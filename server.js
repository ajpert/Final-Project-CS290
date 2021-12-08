var fs = require('fs')
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

var test = false;

app.engine('handlebars', exphbs.engine(({ defaultLayout: 'main' })));
app.set('view engine', 'handlebars');
app.use(express.json())
app.use(express.static('public'));

scoreData = require('./highScores')
scoreData.sort(function (a, b) { return b.wpm - a.wpm })



app.get('/', function (req, res, next) {
    if (true) {
        res.status(200).render('gamePage', { score: scoreData })
    } else {
        next()
    }
})


app.post('/addScore', function (req, res, next) {
    var body = req.body
    var username = req.body.username
    var wpm = req.body.wpm
    scoreData.push({
        username: username,
        wpm: wpm
    })
    //scoreData.sort(function (a, b) {return a.wpm-b.wpm})
    scoreData.sort(function (a, b) { return b.wpm - a.wpm })
    fs.writeFile(
        __dirname + '/highScores.json',
        JSON.stringify(scoreData, null, 2),
        function (err) {
            if (!err) {
                res.status(200).send("store success")
            }
            else {
                res.status(500).send("store error")
            }
        }
    )
    res.status(200).render('gamePage', { score: scoreData })
    
})
app.get('*', function (req, res) {
    res.status(404).render('404')

})


app.listen(port, function () {
    console.log("== Server is listening on port", port);
});





