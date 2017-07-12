const express = require('express');
const http = require('http'); //node http api
const bodyParser = require('body-parser');
const morgan = require('morgan'); //logging framework
const app = express();
const router = require('./router');


/****** App Setup ***/
//toda request será passado para o morgan
//morgan irá logar as requests
app.use(morgan('combined'));

//qq request realizada será parseada para JSON
app.use(bodyParser.json({type: '*/*'}));
router(app);

/****** Server Setup ***/
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);