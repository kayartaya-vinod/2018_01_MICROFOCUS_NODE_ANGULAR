import { Contact } from "../model/contact";
import { Component } from "@angular/core";
import { ContactService } from "../service/contact-service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './templates/contact-form.html'
})
export class AddContactComponent {
    contact: Contact = new Contact();
    btnCaption: string = 'Add this contact';
    title: string = 'Add new contact';

    constructor(private service: ContactService, 
        private router: Router){}

    save(): void {
        this.service.addNew(this.contact)
            .subscribe(data=>{
                if(data['success']) {
                    this.router.navigate(['/view-contact', data.id]);
                }
                else {
                    alert(data['message']);
                }
            });
    }
}