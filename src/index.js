const express = require('express');

const app = express();


app.get("/",(req, res) =>{
    return res.json({message: "Hello World ignite"})
})
//localhost:3031
app.listen(3333);



