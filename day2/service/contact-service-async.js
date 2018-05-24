// module name: contact-service-async
// exports a class ContactServiceAsync

var fs = require('fs');
var path = require('path');

var filename = path.join(__dirname, 'contacts.json');

function checkForCallback(callback) {
    if (!callback || typeof callback != 'function') {
        throw new Error('callback was not supplied as a function');
    }
}
class ContactServiceAsync {
    constructor() {
        if (fs.existsSync(filename)) {
            var content = fs.readFileSync(filename, 'utf-8');
            content = JSON.parse(content);
            this.idCounter = content.idCounter;
            this.contacts = content.contacts;
        }
        else {
            this.idCounter = 1;
            this.contacts = [];
        }

    }

    addNew(contact, callback) {
        checkForCallback(callback);

        if (!contact || typeof contact != 'object') {
            var err = {};
            err.code = 1001;
            err.message = 'No contact was supplied or contact was non-object';
            // callback(err);
            setTimeout(() => { callback(err); }, 0) // no second argument
            return;
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
            var err = {};
            err.code = 1002;
            err.message = 'Missing fields: ' + missingFields.join();
            // callback(err); // no second argument
            setTimeout(() => { callback(err); }, 0) // no second argument
            return;
        }

        contact.id = this.idCounter++;
        this.contacts.push(contact);

        var data = {};
        data.idCounter = this.idCounter;
        data.contacts = this.contacts;
        fs.writeFile(filename, JSON.stringify(data), (err) => {
            if (err) {
                callback(err);
            }
            else {
                callback(null, { id: contact.id });
            }
        });

    }

    getById(id, callback) {
        checkForCallback(callback);
        if (!id || typeof id != 'number') {
            var err = {};
            err.code = 1003;
            err.message = 'No id was supplied or id was non-numeric value';
            setTimeout(() => { callback(err); }, 0);
            return;
        }
        // there is no need to read the file again, since the latest data is
        // present in the this.contacts. Do this for avoiding stale data.
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) {
                callback(err);
            }
            else {
                data = JSON.parse(data);
                this.idCounter = data.idCounter;
                this.contacts = data.contacts;
                var contact = this.contacts.find(c => c.id == id);
                callback(null, contact);
            }
        });

    }

    update(contact, callback) {
        checkForCallback(callback);
    }

    delete(id, callback) {
        checkForCallback(callback);
    }

    getAll(callback) {
        checkForCallback(callback);
    }
}


module.exports = ContactServiceAsync;
