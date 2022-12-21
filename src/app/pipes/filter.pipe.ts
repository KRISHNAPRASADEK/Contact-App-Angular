import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(allContacts: any[], searchKey: string, propName: string): any [] {
    const result:any=[];
    if(!allContacts || searchKey=="" || propName==""){
      return allContacts;
    }
    allContacts.forEach((contact:any)=>{
      if(contact[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(contact)
      }
    })

    return result;
  }
}
