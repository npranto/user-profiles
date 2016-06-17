const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session');

const sessionConfig = require('./config/config.js');
const masterRoutes = require('./server/masterRoutes.js');

const port = 9000;
const app = express();

const corsOptions = {
	host: `http://localhost:${port}`
};

app.use(express.static(__dirname + '/public'));
app.use(json());
app.use(cors(corsOptions));
app.use(session(sessionConfig));
////////////////


masterRoutes(app);











////////////////
app.listen(port, ()=>{
	console.log(`Express running on ${port}`);
})



