import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {
  name: string;
  first_surname: string;
  last_surname: string;
  phone_number: number;
  email: string;

  constructor(private router: Router, private contactService: ContactsService) { }

  ngOnInit() {
  }

  newContact(){
    const contact = {
      name: this.name,
      first_surname: this.first_surname,
      last_surname: this.last_surname,
      phone_number: this.phone_number,
      email: this.email
    }
    this.contactService.newContact(contact);
    this.navigateToHome();
  }
  cancelInsert(){
    this.navigateToHome();
  }

  navigateToHome(){
    this.router.navigate(['/contacts']);
  }

  }



