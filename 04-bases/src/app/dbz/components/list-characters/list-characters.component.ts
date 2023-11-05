import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent {	
	@Input({required : true}) public characterList: Character[] = [];
	@Output() public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

	deleteCharacter(index: number): void {
		this.onDeleteCharacter.emit(index);
	}
}
