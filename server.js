

var path = require('path');
var express = require('express');
//var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3500;

var test = false;

app.use(express.static('public'));

scoreData = require('./highScore')

app.get('/', function (req, res, next) {
if (true) {
    res.status(200).render('index', {
        //: postData
	//	test = true;
    })
} else {
    next()
}
})

app.get('/index.js', function (req, res) {
	res.status(200).sendFile(__dirname + '/public/index.js');
	test = true;
});
app.post('/addScore',function(req,res,next) {

})
app.get('*', function (req, res) {
	if (test == false) {
		console.log("  -- 404!")
		res.status(404).sendFile(__dirname + '/public/404.html')
	}
})

//app.get('*', function (req, res) {
//  res.status(404).render('404')
//});


app.listen(port, function () {
  console.log("== Server is listening on port", port);
});




/*var http = require('http');
var fs = require('fs');

var server = http.createServer(requestHandler);

var page_index, page_index_js, page_css = null;

fs.readFile("./public/index.html", "utf- 8", function(err , data){
 
  page_index = data;
  console.log("== Index sucessfully loaded");
});
fs.readFile("./public/index.js", "utf-8", function(err, data){
 
  page_index_js = data;
  console.log("=== index.js file successfully loaded");
});
fs.readFile("./public/style.css", "utf-8", function(err, data) {
    
    page_css = data;
    console.log("[file successfully read: style.css]");
});
server.listen(3000, function(err) {
   
    console.log("=== Server is listening on port 3000");
});
function requestHandler(req, res){
  console.log("request recevived")

  switch(req.url){
    case "/":
    case"/index.html":
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
            break;
    case "/style.css":
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page_style_css);
            break;

    case "/index.js":
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(page_index_js);
            break;
  }
  res.end();
}*/
