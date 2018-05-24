let express = require('express');
let app = express();
let path = require('path');

app.use(express.static(path.join(__dirname, 'www')));

let author = {};
author.name = 'Vinod Kumar K';
author.email = 'vinod@vinod.co';
author.phone = '9731424784';

app.get('/api/author', (req, resp)=>{
    resp.json(author);
});


app.listen(1234, ()=>{
    console.log('server started at port 1234');
    console.log('visit http://localhost:1234/ using a browser');
});

