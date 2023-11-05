import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListCharactersComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
		FormsModule
  ],
	exports: [
		MainPageComponent
	]
})
export class DbzModule { }
