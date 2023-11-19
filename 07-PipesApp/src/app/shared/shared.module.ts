import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialComponentsModule } from '../material-components/material-components.module';

import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
		RouterModule,
		MaterialComponentsModule
  ],
	exports: [
		MenuComponent
	]
})
export class SharedModule { }
