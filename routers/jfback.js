const express = require('express')
const app = new express.Router()
const mysqlCon=require("../mysqldb")

const fs=require('fs')
app.use(express.json())


//--------------------------------------------------------->change path https://claim.mmoo.ca/Api/policyword--------------

app.get(`/policyword` ,(req,res)=>{
    //--------------------------------req need policy_number---------------------------
    const policy_number=req.query.policy_number.toUpperCase();

    function get_info( callback){
        var query = `SELECT effective_date FROM policy WHERE policy_number="${policy_number}"`;//--------------------->change query based on database

        mysqlCon.query(query, function(err, results){
              if (err){ 
                throw err;
              }
              if(results.length<1){
                res.status(404)
                res.send('Not Valid Policy, Try Again');
                return 
            }
              return callback(results[0].effective_date);
      })
  }


  get_info(function(result){
    var effective_date = result.toISOString().substring(0, 10);

    const newDate= new Date(effective_date)
    const oldDate= new Date("2021-08-16")

    if (policy_number.toString().substring(0,3)==='JFR'){
        var file = fs.createReadStream('./files/JFR_Policy.pdf');
        var stat = fs.statSync('./files/JFR_Policy.pdf');
        res.setHeader('Content-Length', stat.size);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=JFR_Policy.pdf`);
        file.pipe(res);
    }
    
    else if (policy_number.toString().substring(0,4)==='JFPL'){
      var file = fs.createReadStream('./files/JFPL_Policy.pdf');
      var stat = fs.statSync('./files/JFPL_Policy.pdf');
      res.setHeader('Content-Length', stat.size);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=JFPL_Policy.pdf');
      file.pipe(res);
  }
  else if (policy_number.toString().substring(0,4)==='TOP'){
    var file = fs.createReadStream('./files/TOP_Policy.pdf');
    var stat = fs.statSync('./files/TOP_Policy.pdf');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=TOP_Policy.pdf');
    file.pipe(res);
}
else if (policy_number.toString().substring(0,4)==='JFVTC'){
    var file = fs.createReadStream('./files/JFVTC_Policy.pdf');
    var stat = fs.statSync('./files/JFVTC_Policy.pdf');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=JFVTC_Policy.pdf');
    file.pipe(res);
}
  else if (policy_number.toString().substring(0,4)==='JFGD'){
    var file = fs.createReadStream('./files/JFGD_Policy.pdf');
    var stat = fs.statSync('./files/JFGD_Policy.pdf');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=JFGD_Policy.pdf');
    file.pipe(res);
}
  else if (policy_number.toString().substring(0,3)==='JFP'){
    var file = fs.createReadStream('./files/JFP_Policy.pdf');
    var stat = fs.statSync('./files/JFP_Policy.pdf');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=JFP_Policy.pdf');
    file.pipe(res);
}
else if (policy_number.toString().substring(0,3)==='JFE'){
  var file = fs.createReadStream('./files/JFE_Policy.pdf');
  var stat = fs.statSync('./files/JFE_Policy.pdf');
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=JFE_Policy.pdf');
  file.pipe(res);
}
    else if(policy_number.toString().substring(0,4)==='JESP'){
      if (newDate>oldDate){
        var file = fs.createReadStream('./files/JESP_new Policy.pdf');
        var stat = fs.statSync('./files/JESP_new Policy.pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=JESP_new Policy.pdf');
       
      }
      else{
        var file = fs.createReadStream('./files/JESP_Policy.pdf');
        var stat = fs.statSync('./files/JESP_Policy.pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=JESP_Policy.pdf');
      }
      res.setHeader('Content-Length', stat.size);
      res.setHeader('Content-Type', 'application/pdf');
      file.pipe(res);
        
    }
    else if(policy_number.toString().substring(0,3)==='JES'){
      if (newDate>oldDate){
        var file = fs.createReadStream('./files/JES_new Policy.pdf');
        var stat = fs.statSync('./files/JES_new Policy.pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=JES_new Policy.pdf');
       
      }
      else{
        var file = fs.createReadStream('./files/JES_Policy.pdf');
        var stat = fs.statSync('./files/JES_Policy.pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=JES_Policy.pdf');
      }
      res.setHeader('Content-Length', stat.size);
      res.setHeader('Content-Type', 'application/pdf');
      file.pipe(res);
    }


 });

  })











//--------------------------------------------------------->change path https://claim.mmoo.ca/Api/claimform---------
app.get('/claimform', (req, res) => {             
    const policy_number=req.query.policy_number
    if (policy_number.toString().substring(0,4)==="JESP"){
          var file = fs.createReadStream('./files/JESP_claimform.pdf');
          var stat = fs.statSync('./files/JESP_claimform.pdf');
          res.setHeader('Content-Length', stat.size);
          res.setHeader('Content-Type', 'application/pdf');
          res.setHeader('Content-Disposition', 'attachment; filename=JESP_claimform.pdf');
          file.pipe(res)
    }
    else if(policy_number.toString().substring(0,5)==="JFVTC"){
      var file = fs.createReadStream('./files/JFVTC_claimform.pdf');
      var stat = fs.statSync('./files/JFVTC_claimform.pdf');
      res.setHeader('Content-Length', stat.size);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=JFVTC_claimform.pdf');
      file.pipe(res)
    }
    else if(policy_number.toString().substring(0,5)==="JFGD"){
        var file = fs.createReadStream('./files/JFGDclaimform.pdf');
        var stat = fs.statSync('./files/JFGD_claimform.pdf');
        res.setHeader('Content-Length', stat.size);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=JFGD_claimform.pdf');
        file.pipe(res)
      }
    else if(policy_number.toString().substring(0,4)==="JFPL"){
      var file = fs.createReadStream('./files/JFPL_claimform.pdf');
      var stat = fs.statSync('./files/JFPL_claimform.pdf');
      res.setHeader('Content-Length', stat.size);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=JFPL_claimform.pdf');
      file.pipe(res)
    }
    else if(policy_number.toString().substring(0,4)==="JFE"){
        var file = fs.createReadStream('./files/JFE_claimform.pdf');
        var stat = fs.statSync('./files/JFE_claimform.pdf');
        res.setHeader('Content-Length', stat.size);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=JFE_claimform.pdf');
        file.pipe(res)
      }
    else if(policy_number.toString().substring(0,4)==="TOP"){
        var file = fs.createReadStream('./files/TOP_claimform.pdf');
        var stat = fs.statSync('./files/TOP_claimform.pdf');
        res.setHeader('Content-Length', stat.size);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=TOP_claimform.pdf');
        file.pipe(res)
      }
    else if(policy_number.toString().substring(0,3)==="JES"){
          var file = fs.createReadStream('./files/JES_claimform.pdf');
          var stat = fs.statSync('./files/JES_claimform.pdf');
          res.setHeader('Content-Length', stat.size);
          res.setHeader('Content-Type', 'application/pdf');
          res.setHeader('Content-Disposition', 'attachment; filename=JES_claimform.pdf');
          file.pipe(res)
    }
    else if(policy_number.toString().substring(0,3)==="JFR"){
          var file = fs.createReadStream('./files/JFR_claimform.pdf');
          var stat = fs.statSync('./files/JFR_claimform.pdf');
          res.setHeader('Content-Length', stat.size);
          res.setHeader('Content-Type', 'application/pdf');
          res.setHeader('Content-Disposition', 'attachment; filename=JFR_claimform.pdf');
          file.pipe(res)
    }
    else if(policy_number.toString().substring(0,3)==="JFP"){
      var file = fs.createReadStream('./files/JFP_claimform.pdf');
      var stat = fs.statSync('./files/JFP_claimform.pdf');
      res.setHeader('Content-Length', stat.size);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=JFP_claimform.pdf');
      file.pipe(res)
  }
    else{
      res.status(401).send("please enter valid policy number")
      return
    }
  })

module.exports = app