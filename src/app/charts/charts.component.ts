import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ProductsService } from '../products.service';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  // arrays para contacts
  initialLetter = [];
  contactsByFullName = [];
  emailExtensions = [];
  phonePrefixData = [];
  
  // arrays para products
  categoryType = [];

  constructor(private contactsService: ContactsService, private productsService: ProductsService, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.contactsService.getContacts().subscribe(data =>{
      this.initialLetter = this.calculatedInitialLettersData(data);
      this.contactsByFullName = this.calculateContactsByFullName(data);
      this.emailExtensions = this.calculateEmailExtensionsData(data);
      this.phonePrefixData = this.geeratePhonePrefixData(data);
    })

    

  }

  // funciones para contacts
  calculatedInitialLettersData(contacts: any[]): any{
    return contacts.reduce((result, contact) =>{
      const initial = contact.first_surname.charAt(0).toUpperCase();
      if(result.find(item => item.name === initial)){
        result.find(item => item.name === initial).value++;
      }else{
        result.push({name: initial, value: 1})
      }
      return result;
    }, [])
  }

  calculateContactsByFullName(contacts: any[]): any{
    let tempContactsByFullName = [{
      name: 'Contacts',
      series: []
      
    }];
    contacts.forEach(contact => {
      const fullName = contact.name + contact.first_surname + contact.last_surname;
      const size = fullName.length;
      const range = `${size - (size % 5)} - ${size - (size % 5) + 4} ch.`;
      let existingRange = tempContactsByFullName[0].series.find(item => item.name === range);
      if(existingRange){
        existingRange.value++;
      }
      else{
        tempContactsByFullName[0].series.push({name: range, value: 1});
      }
    });
    return tempContactsByFullName.map(entry =>{
      return {
        ...entry,
        series: entry.series.sort( (a,b) => Number(a.name.split('-')[0]) - Number(b.name.split('-'[0])) )
      }
    })
  }

  calculateEmailExtensionsData(contacts: any[]): any{
    let emailExtensionsMap = new Map<string, number>();

    contacts.forEach(contact => {
      let emailParts = contact.email.split('@');
      if(emailParts.length == 2){
        const domain = emailParts[1];
        const firstDotIndex = domain.indexOf('.');
        if(firstDotIndex != 1){
          const extension = domain.substring(firstDotIndex);
          if(emailExtensionsMap.has(extension)){
            emailExtensionsMap.set(extension, emailExtensionsMap.get(extension)+1);
          } else{
            emailExtensionsMap.set(extension, 1);
          }
        }
      }
    });

    let emailExtensions = [];
    emailExtensionsMap.forEach((value, key) =>{
      emailExtensions.push({name: key, value: value});
    });
    return emailExtensions;
  }


  geeratePhonePrefixData(contacts: any[]): any{
    let phonePrefixData = [];
    let prefixCount = {};
    contacts.forEach(contact => {
      const phonePrefix = String(contact.phone_number).substring(0,1);
      if(prefixCount[phonePrefix]){
        prefixCount[phonePrefix]++;
      }else{
        prefixCount[phonePrefix]=1;
      }
    });
    for (let prefix in prefixCount){
      if(prefixCount.hasOwnProperty(prefix)){
        phonePrefixData.push({name: prefix, value: prefixCount[prefix]})
      }
    }
    return phonePrefixData;
  }

  // funciones para products y categories




}






