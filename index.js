const express=require('express')
// const con=require('./mysqldb')

// var cors = require('cors')
const path = require('path');

const app=express()

const claimRouter = require('./routers/jfback')

app.use(express.json())

app.use(claimRouter)


const port= process.env.PORT || 3000;


app.get("/",(req,res)=>{
  res.send("welcome")
})


app.get("*", (req, res) => {
    res.status(404).json({
      success: "false",
      message: "Page not found",
      error: {
        statusCode: 404,
        message: "You reached a route that is not defined on this server",
      },
    });
  });


app.listen(port,()=>{
    console.log('service running on port '+ process.env.PORT||3000)
})


