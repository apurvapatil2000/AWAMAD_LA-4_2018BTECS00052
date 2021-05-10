var express = require('express')
var app = express()
var port = '3000'
var host = '127.0.0.1'

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.use(express.static('public'));
  
app.get('/AadharForm.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "AadharForm.html" );  
})

app.post('/process_post', urlencodedParser, function (req, res) {  
response = {  
       first_name:req.body.first_name,
       last_name:req.body.last_name,
       birth_date:req.body.birth_date,
       city:req.body.city,
       pincode:req.body.pincode
   };  
   console.log(response);  
   res.end(JSON.stringify(response));
})


	var server = app.listen(3000, function () {
  	var host = server.address().address;
  	var port = server.address().port;
  	console.log("Example app listening at http://%s:%s", host, port)
})  