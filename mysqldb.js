const mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",//-------------------------->replace
        port:"",//-------------------------->replace
        user: "",//-------------------------->replace
        password: "",//-------------------------->replace
        database: 'sys'//-------------------------->replace
      });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
});


module.exports = con;