import { Component, OnInit } from '@angular/core';

export interface Contact {
  id: number;
  name: string;
  first_surname: string;
  last_surname: string;
  phone_number: number;
  email: string;
}

const ELEMENT_DATA: Contact[] = [
  {id: 1, name: 'Misael', first_surname:'Cordeiro', last_surname: 'Vinces', phone_number:662911509, email:'misael@gmail.com'},
  {id: 2, name: 'Diego', first_surname:'Rodriguez', last_surname: 'Barros', phone_number:666555444, email:'diego@gmail.com'},
  {id: 3, name: 'Breixo', first_surname:'Casaus', last_surname: 'Caralludo', phone_number:696858747, email:'breixo@gmail.com'},
  {id: 4, name: 'Saule', first_surname:'Millage', last_surname: 'Camaño', phone_number:656323545, email:'jules@gmail.com'},
  {id: 5, name: 'Pedro', first_surname:'Parcero', last_surname: 'Santos', phone_number:685741915, email:'cuate@gmail.com'},
  {id: 6, name: 'Lucho', first_surname:'Remix', last_surname: 'Skere', phone_number:666999777, email:'lucho@gmail.com'},
  {id: 7, name: 'Martin', first_surname:'Brunsito', last_surname: 'Kayak', phone_number:616353280, email:'bruns@gmail.com'},
  {id: 8, name: 'Marti', first_surname:'Cabalo', last_surname: 'Estevez', phone_number:697845623, email:'cabalo@gmail.com'},
  {id: 9, name: 'Dani', first_surname:'Lemos', last_surname: 'Narrias', phone_number:698754623, email:'broda@gmail.com'},
  {id: 10, name: 'Borja', first_surname:'Fenosita', last_surname: 'Juncaloide', phone_number:600000012, email:'fenosita@gmail.com'},

];

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css',],
})

export class ContactHomeComponent {

  displayedColumns: string[] = ['id', 'name', 'first_surname', 'last_surname','last_surname','phone_number','email'];
  contacts = ELEMENT_DATA; 

}
