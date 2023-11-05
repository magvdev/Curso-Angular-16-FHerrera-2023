import { Component, inject } from '@angular/core';

import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  private dbzService = inject(DbzService);

  constructor() {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addNewCharacter(character);
  }

  onDeleteCharacterById(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }
}
