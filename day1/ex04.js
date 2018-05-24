var ContactService = require("./service/contact-service");

var service = new ContactService();

var c1 = {};
c1.gender = "M";
c1.firstname = "Vinod";
c1.lastname = "Kumar";
c1.email = "vinod@vinod.co";
c1.phone = "9731424784";

var id = service.addNew(c1);

console.log("new contact added with id", id);
console.log(service.contacts);