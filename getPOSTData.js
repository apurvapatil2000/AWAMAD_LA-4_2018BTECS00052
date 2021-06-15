var express = require('express')
var app = express()
var port = '3000'
var host = '127.0.0.1'
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Apurva2000",
  database: "ESELA4"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Database is Connected Successfully!");  
});


app.use(express.static('public'));
  
app.get('/localrequest.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "localrequest.html" );  
})

app.post('/process_post', urlencodedParser, function (req, res) {  
response = {  
       service_type:req.body.service,
       service_center_address:req.body.center,
       customer_name:req.body.customer_name,
       mobile:req.body.mobile,
       email_address:req.body.email,
       address:req.body.address,
       city:req.body.city,
       pincode:req.body.pincode,
       preferred_date:req.body.pdate,
       preferred_time:req.body.time,
       fault:req.body.fault
   };  
   console.log(response);  
   res.end(JSON.stringify(response));
})

	var server = app.listen(3000, function () {
  	var host = server.address().address;
  	var port = server.address().port;
  	console.log("Example app listening at http://%s:%s", host, port)
})  











/*app.get('/process_get', function (req, res) {  
res.send('<p>Username: ' + req.query['first_name']+'</p><p>Lastname: '+req.query['last_name']+'</p>');
})*/
/*app.get('/process_post',function(req,res){
  console.log(req.body);
  var sql="insert into localrequest(service_type, service_center_address, customer_name,mobile,email,address,city,pincode,preferred_date,preferred_time,fault) values('"+ req.body.service +"','"+req.body.center+"','"+req.body.customer_name+"','"+req.body.mobile+"','"+req.body.email+"','"+req.body.address+"','"+req.body.city+"','"+req.body.pincode+"','"+req.body.date+"','"+req.body.time+"','"+req.body.fault+"')"
  con.query(sql,function(err,rows,fields){
    if(err) throw err

  })
  res.send()*/