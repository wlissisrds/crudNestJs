const express = require('express');

const app = express();
const routs = require('./routes');

app.use(routs);



app.listen(3333,()=>console.log("server is running"));