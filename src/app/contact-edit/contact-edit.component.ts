import { Component, Input } from '@angular/core';
import { Contact } from '../contact-list/contact-list.component'

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent {
  @Input() contact: Contact = {} as Contact;
  saveChanges(){
    this.closeForm();
  }

  closeForm(){
    this.contact = {} as Contact;
  }
}
