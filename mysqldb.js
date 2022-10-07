const mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",//-------------------------->replace
        port:"3306",//-------------------------->replace
        user: "root",//-------------------------->replace
        password: "root",//-------------------------->replace
        database: 'sys'//-------------------------->replace
      });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
});


module.exports = con;