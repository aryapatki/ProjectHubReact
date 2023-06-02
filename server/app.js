const express = require('express')
const app = express()

app.get("/api", (req,res) =>{
    res.json({"users": ["ARya", "userOne", "userTwo", "userThree", "userFour", "userFive"]})
})

app.listen(process.env.PORT || 5000, function(err) {
    console.log('Server started on 5000');
  });