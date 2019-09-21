var express=require('express');
var sql = require('mssql');
var app=express();
app.get('/',function(req,res)
{
res.send('Hello World liseting on Port : {port}');
});
app.post('/AddMovie',(req,res)=>{
  res.send("Movie Added");
});
app.get('/movies',(req,res)=>{
    console.log("Movies")
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from movie', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            sql.close()
            
        });
    });
    //executeStatement()
})
const port = 3000;
var server=app.listen(port, () => console.log('Server running on ${port}!'));


  var config = {
    server: "movierepo.database.windows.net",
    database: 'moviedb', 
    // If you're on Windows Azure, you will need this:
    options: {encrypt: true},
    authentication: {
      type: "default",
      options: {  
        userName: "we2learn@movierepo",
        password: "Azure@2019",
      }
    }
  };
  

  