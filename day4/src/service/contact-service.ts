import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const url: string = 'http://localhost:1234/rest/contacts/';

@Injectable()
export class ContactService {

    constructor(private http: Http) {
    }

    getAll(): Observable<Contact[]> {
        return this.http.get(url)
            .map(resp => resp.json().data as Contact[]);
    }

    getOne(id: string): Observable<Contact> {
        return this.http.get(url + id)
            .map(resp => resp.json().data as Contact);
    }

    delete(id: string): Observable<any> {
        return this.http.delete(url + id)
            .map(resp => resp.json().data);
    }

    update(contact: Contact): Observable<any> {
        return this.http.put(url + contact._id, contact)
            .map(resp => resp.json());
    }

    addNew(contact: Contact): Observable<any> {
        return this.http.post(url, contact).map(r => r.json());
    }
}