import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContact';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'https://contactapp-api.onrender.com/contacts';
  // http://localhost:3000/contacts

  constructor(private http: HttpClient) {}

  //function for get all contacts
  getAllContacts(): Observable<MyContact> {
    return this.http.get(this.baseUrl);
  }

  //function for view a particular contact
  viewContact(contactId: string) {
    return this.http.get(`${this.baseUrl}/${contactId}`);
  }

  //function for getting particular group name
  getGroupName(groupId: string) {
    return this.http.get(
      'https://contactapp-api.onrender.com/groups/' + groupId
    );
  }

  // http://localhost:3000/groups

  //function for fetch all groups from https://contact-api-e6s0.onrender.com/groups
  getAllGroups() {
    return this.http.get('https://contact-api-e6s0.onrender.com/groups');
  }

  //function for adding new contacts to server
  addContact(contactBody: any) {
    return this.http.post(this.baseUrl, contactBody);
  }

  //function for deleting a contact
  deleteContact(contactId: any) {
    return this.http.delete(`${this.baseUrl}/${contactId}`);
  }

  // update contact detailes according to the user select
  updateContact(contactId: any, contactBody: any) {
    return this.http.put(`${this.baseUrl}/${contactId}`, contactBody);
  }
}
