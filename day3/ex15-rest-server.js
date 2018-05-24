let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());
let baseUrl = '/rest/contacts/';

// enable CORS for all requests
app.use((req, resp, next)=>{
    resp.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    next();
});

// using postman, send a GET request to http://localhost:1234/rest/contacts
app.get(baseUrl, require('./controllers/get-all'));
app.get(baseUrl + ':id', require('./controllers/get-one'));
app.delete(baseUrl + ':id', require('./controllers/delete'));
app.post(baseUrl, require('./controllers/add-new'));
app.put(baseUrl + ':id', require('./controllers/update'));


app.listen(1234, () => {
    console.log('REST server ready at http://localhost:1234/');
});