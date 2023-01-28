import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MyContact } from 'src/models/myContact';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = environment.API_URL;
  // http://localhost:3000/contacts

  constructor(private http: HttpClient) {}

  //function for get all contacts
  getAllContacts(): Observable<MyContact> {
    return this.http.get(this.baseUrl + '/contacts');
  }

  //function for view a particular contact
  viewContact(contactId: string) {
    return this.http.get(`${this.baseUrl}/contacts/${contactId}`);
  }

  //function for getting particular group name
  getGroupName(groupId: string) {
    return this.http.get(this.baseUrl + '/groups/' + groupId);
  }

  // http://localhost:3000/groups

  //function for fetch all groups from
  getAllGroups() {
    return this.http.get(this.baseUrl + '/groups');
  }

  //function for adding new contacts to server
  addContact(contactBody: any) {
    return this.http.post(this.baseUrl + '/contacts', contactBody);
  }

  //function for deleting a contact
  deleteContact(contactId: any) {
    return this.http.delete(`${this.baseUrl}/contacts/${contactId}`);
  }

  // update contact detailes according to the user select
  updateContact(contactId: any, contactBody: any) {
    return this.http.put(`${this.baseUrl}/contacts/${contactId}`, contactBody);
  }
}
