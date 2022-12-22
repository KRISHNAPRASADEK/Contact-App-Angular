import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css'],
})
export class ContactManagerComponent implements OnInit {
  // allContacts:any
  allContacts: MyContact[] = [];
  searchKey: string = '';
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllContacts();
  }

  //get all contacts
  getAllContacts() {
    this.api.getAllContacts().subscribe((data: any) => {
      this.allContacts = data;
    });
  }

  //search
  search(event: any) {
    this.searchKey = event.target.value;
  }

  deleteContact(contactId: any) {
    this.api.deleteContact(contactId).subscribe((data: any) => {
      this.getAllContacts();
    });
  }
}
