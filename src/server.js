const express = require('express');
const routs = require('./routes');

const app = express();

//passar os valores para body
app.use(express.json());
app.use(routs);

//nodFound
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404;
    next(error);
})

//captura de erros
//middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({error: error.message})
})


app.listen(3333,()=>console.log("server is running"));