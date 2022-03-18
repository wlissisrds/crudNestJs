const express = require('express');
const routs = require('./routes');

const app = express();

//passar os valores para body
app.use(express.json());
app.use(routs);


//captura de erros
//middleware
app.use((error, req, res, next) => {
    req.status(error.status || 500);
    res.json({error: error.message})
})


app.listen(3333,()=>console.log("server is running"));