import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/person.class';

@Pipe({
  name: 'person'
})
export class PersonPipe implements PipeTransform {

  transform(value: Person, present: boolean = true): string {

    if( present )
      return "Je m'appelle "+ value.nom + " et j'ai " + value.age + "ans.";
    else
      return "nom: "+value.nom +" || age : "+ value.age;
      
  }

}
