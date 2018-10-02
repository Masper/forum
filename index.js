const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');

/* import JSON-objects */

var topicObject = require ('./data/topics');
var messageObject = require ('./data/message');

/* start server */
app.use(cors())

app.listen(port, function()
	{
		console.log('Example app listening on port 3000!')
	}
	);


app.get('/', function(req,res) {
	res.send('Homepage is active!')
}
)

app.get('/api/topics', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.send(topicObject)
}
)

app.get('/api/message', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.json(messageObject);
}
)
