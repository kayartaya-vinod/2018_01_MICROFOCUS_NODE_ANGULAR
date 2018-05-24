// constructor for ContactService object
// Start with uppercase letter for a function, only if you are going
// to use it as a constructor (using the new keyword)
function ContactService() {
    this.idCounter = 1;
    this.contacts = [];
    // contacts: Array<Contact> = []; // TypeScript
}

// ContactService.prototype is the prototype used for manufacturing an object
// of ContactService 

ContactService.prototype.addNew = function (contact) {
    // 0, '', undefined, null, false ---> false in boolean context
    if (!contact || typeof contact != 'object') {
        throw new Error('No contact was supplied or contact was non-object');
    }

    var requiredFields = ['firstname', 'lastname', 'email', 'phone', 'gender'];
    var missingFields = [];
    for (var i = 0; i < requiredFields.length; i++) {
        var fld = requiredFields[i];
        if (!(fld in contact)) {
            missingFields.push(fld);
        }
    }

    if (missingFields.length > 0) {
        throw new Error("Missing fields: " + missingFields.join());
    }

    contact.id = this.idCounter++;
    this.contacts.push(contact);
    return contact.id;
};

ContactService.prototype.update = function () { };
ContactService.prototype.delete = function () { };

ContactService.prototype.getById = function (id) { 
    if (!id || typeof id != 'number') {
        throw new Error('No id was supplied or id was non-numeric value');
    }

    return this.contacts.find( c=> c.id==id );
};


ContactService.prototype.getAll = function () { };


module.exports = ContactService;

// var service = new ContactService();