import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css'],
})
export class ListCharactersComponent {
  @Input({ required: true }) public characterList: Character[] = [];
  @Output() public onDeleteCharacterById: EventEmitter<string> =
    new EventEmitter();

  deleteCharacterById(id: string): void {
    this.onDeleteCharacterById.emit(id);
  }
}
