import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 10000,
    },
    {
      name: 'Vegeta',
      power: 8500,
    },
  ];

  addNewCharacter(character: Character): void {
		console.log('character :>> ', character);
		this.characters.push(character);
	}

	deleteCharacter(index: number): void {
		this.characters.splice(index, 1);
	}
}
