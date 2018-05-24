const URL = 'mongodb://localhost:27017';
let mc = require('mongodb').MongoClient;

mc.connect(URL, (err, client) => {
    if (err) throw err;

    let db = client.db('microfocusdb');

    let contacts = db.collection('contacts');
    contacts.findOne((err, doc) => {
        if (err) throw err;

        console.log(doc);
        client.close();
    });
});

console.log('*** End of script ***')