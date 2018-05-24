let ContactServiceMongodb = require('./service/contact-service-mongodb');
let service = new ContactServiceMongodb();

let id = '5a549b9647a4fb823e0c5042';

service.getById(id, (err, data) => {
    if (err) {
        console.log('there was an error', err);
    }
    else {
        console.log(data);
    }
});

console.log('*** End of script ***');