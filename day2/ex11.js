let ContactServiceMongodb = require('./service/contact-service-mongodb');
let service = new ContactServiceMongodb();

let c1 = {};
c1.firstname = 'Vinod';
c1.lastname = 'Kumar';
c1.phone = '9731424784';
c1.email = 'vinod@vinod.co';
c1.gender = 'Male';

service.addNew(c1, (err, status) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(status);
});
console.log('*** End of script ***');