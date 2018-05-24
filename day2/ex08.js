var ContactServiceAsync = require('../day2/service/contact-service-async');

var service = new ContactServiceAsync();

var c1 = { firstname: 'Shyam', lastname: 'Sundar', gender: 'M', email: 'shyam@vinod.co', phone: '9731424777' };

service.addNew(c1, (err, status) => {
    if (err) {
        console.log('There was an error');
        console.log(err);
    }
    else {
        console.log('new contact added with id: ');
        console.log(status.id);
    }
});

console.log('**** End of script ****');