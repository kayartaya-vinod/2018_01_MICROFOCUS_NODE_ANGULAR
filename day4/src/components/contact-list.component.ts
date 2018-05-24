import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact-service';

@Component({
    selector: 'contact-list',
    templateUrl: './templates/contact-list.html'
})
export class ContactListComponent implements OnInit {

    contacts: Array<Contact> = [];

    constructor(private service: ContactService) {
    }

    ngOnInit(): void {
        this.service.getAll()
            .subscribe(data => this.contacts = data);
    }

    storeInSessionStorage(c: Contact): void {
        window.sessionStorage.setItem('contact', JSON.stringify(c));
    }
}