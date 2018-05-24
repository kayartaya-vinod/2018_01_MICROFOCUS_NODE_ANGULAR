const URL = 'mongodb://localhost:27017';
let mc = require('mongodb').MongoClient;

let c1 = {};
c1._id = 1002;
c1.firstname = 'Vinod';
c1.lastname = 'Kumar';
c1.phone = '9731424784';
c1.email = 'vinod@vinod.co';
c1.city = 'Bangalore';
c1.gender = 'Male';
c1.dob = '1974-01-20';

mc.connect(URL, (err, client) => {
    if (err) throw err;

    let db = client.db('microfocusdb');

    let contacts = db.collection('contacts');
    contacts.insertOne(c1, (err, status) => {
        if (err) throw err;

        console.log(status.insertedId);
        client.close();
    });
});

console.log('*** End of script ***')