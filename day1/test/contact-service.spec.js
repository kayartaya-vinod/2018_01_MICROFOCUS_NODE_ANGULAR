var ContactService = require("../service/contact-service");

var service;
describe('test functions of ContactService class', () => {

    describe('test addNew() function', () => {

        beforeEach(() => {
            service = new ContactService();
        });

        it('should add a contact successfully', () => {
            var c1 = {};
            c1.gender = "M";
            c1.firstname = "Vinod";
            c1.lastname = "Kumar";
            c1.email = "vinod@vinod.co";
            c1.phone = "9731424784";

            var id = service.addNew(c1);
            expect(id).toBeDefined();
            expect(id).toBe(1);

        });

        it('should fail to add a contact without email', () => {
            // expect(()=>{}).toThrow();
            // expect(function(){}).toThrow();
            expect(() => {
                var c1 = {};
                c1.gender = "M";
                c1.firstname = "Vinod";
                c1.lastname = "Kumar";
                c1.phone = "9731424784";
                service.addNew(c1);
            }).toThrow();
        });

    });

    describe('test getById() function', () => {

        beforeEach(() => {
            service = new ContactService();
            var c1 = { id: 1, firstname: "Raj", lastname: "Kumar", email: "rajkumar@mail.com", phone: "9988776655", gender: "M" };
            service.contacts.push(c1);

            var c1 = { id: 2, firstname: "Raj", lastname: "Kumar", email: "rajkumar@mail.com", phone: "9988776655", gender: "M" };
            service.contacts.push(c1);

            var c1 = { id: 3, firstname: "Raj", lastname: "Kumar", email: "rajkumar@mail.com", phone: "9988776655", gender: "M" };
            service.contacts.push(c1);
        });

        it('should get contact for existing id', () => {
            var c1 = service.getById(2);
            expect(c1).toBeDefined();
            expect(c1.firstname).toBeDefined();
            expect(c1.firstname).toEqual("Raj");
        });

        it('should return undefined for invalid id', () => {
            var c1 = service.getById(22);
            expect(c1).toBeUndefined();
        });

        it('should thorw error for wrong type of input', () => {
            expect(() => { service.getById('xyz') }).toThrow();
        });
    });

});