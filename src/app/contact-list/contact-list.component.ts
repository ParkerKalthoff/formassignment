import { Component, OnInit } from '@angular/core';

export interface Contact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{

  contacts: Contact[] = [];
  selectedContact: Contact = {} as Contact;
  
  constructor(){}

  ngOnInit(){
    this.contacts =[
      { 
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '111-111-1111',
        email: 'john.doe@gmail.com'
      },
      {
        firstName: 'Mary',
        lastName: 'Doe',
        phoneNumber: '222-222-2222',
        email: 'mary.doe@gmail.com'
      },
      {
        firstName: 'Larry',
        lastName: 'Smith',
        phoneNumber: '333-333-3333',
        email: 'larry.smith@gmail.com'
      },
      {
        firstName: 'Jane',
        lastName: 'Lee',
        phoneNumber: '444-444-4444',
        email: 'jane.lee@gmail.com'
      },
      {
        firstName: 'Michael',
        lastName: 'Nguyen',
        phoneNumber: '555-555-5555',
        email: 'michael.nguyen@gmail.com'
      }
    ];
  }

  selectContact(contact: Contact){
    this.selectedContact=contact;
  }
   
  saveContact(contact: Contact){
    const index = this.contacts.indexOf(contact);
    this.contacts[index] = contact;
    this.selectedContact = {} as Contact;
    
  }

  deleteContact(contact: Contact){
    const index = this.contacts.indexOf(contact);
    if(index>=0){this.contacts.splice(index,1);}
      this.selectedContact = {} as Contact;
    }

  addContact(){
    const newContact: Contact= {firstName: '', lastName: '', phoneNumber:'', email:''}
    this.contacts.push(newContact);
    this.selectedContact = newContact;
  }

  editContact(index: number){
    this.selectedContact = this.contacts[index];
  }

  

}



