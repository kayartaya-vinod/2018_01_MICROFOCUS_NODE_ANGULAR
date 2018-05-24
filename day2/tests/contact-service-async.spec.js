// contact-service-async.spec.js
var ContactServiceAsync = require('../service/contact-service-async');
var fs = require('fs');
var path = require('path');
var filename = path.join(__dirname, '..', 'service', 'contacts.json');

let service;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000

describe('Testing the ContactServiceAsync class methods', () => {

    beforeEach(() => {
        // reset the data in the file
        let data = { idCounter: 3 };
        data.contacts = [];
        data.contacts.push({ id: 1, firstname: 'Vinod', lastname: 'Kumar', email: 'vinod@vinod.co', phone: '9731424784', gender: 'M' });
        data.contacts.push({ id: 2, firstname: 'Shyam', lastname: 'Sundar', email: 'shyamsundar@vinod.co', phone: '9731424777', gender: 'M' });

        // sync function is used, so that the test spec is executed only after
        // the file-write is complete
        fs.writeFileSync(filename, JSON.stringify(data));

        service = new ContactServiceAsync();
    });

    describe('Testing the addNew() function', () => {

        // by declaring a variable (any name is okay, 'done' is preferred), as the
        // callback's parameter, you are notifying jasmine that the code involves 
        // call to an asynchronous function. The parameter 'done' is a function,
        // supplied by jasmine, and must be called inside the callback of the async
        // function. Else, after a timeout, an error is thrown.

        // timeout interval can be controlled by setting
        // jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000
        it('should not add a number as a contact', (done) => {
            service.addNew(123, (err, status) => {
                expect(err).toBeDefined();
                expect(err.code).toEqual(1001);
                done();
            });
        });

        it('should add a contact with all details', done => {
            let c1 = { firstname: 'Vinay', lastname: 'Raj', email: 'vinay@vinod.co', phone: '9731424722', gender: 'M' };
            service.addNew(c1, (err, status) => {
                expect(err).toBe(null);
                expect(status).toBeDefined();
                expect(status.id).toBeDefined();
                expect(status.id).toEqual(3);
                done();
            });

        });
    });

    describe('Testing the getById() function', () => {
        it('should get contact for existing id', done => {
            service.getById(1, (err, contact) => {
                expect(err).toBe(null);
                expect(contact).toBeDefined();
                expect(contact.id).toEqual(1);
                expect(contact.firstname).toEqual('Vinod');
                done();
            });
        });
        it('should get "undefined" for non-existing id', done => {
            service.getById(100, (err, contact) => {
                expect(err).toBe(null);
                expect(contact).toBeUndefined();
                done();
            });
        });
        it('should get "err" for non numeric id', done => {
            service.getById('asd', (err, contact) => {
                expect(err).toBeDefined();
                expect(contact).toBeUndefined();
                expect(err.code).toEqual(1003);
                done();
            });
        });
    });
});