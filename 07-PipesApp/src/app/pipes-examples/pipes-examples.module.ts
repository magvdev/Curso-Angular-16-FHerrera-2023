import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesExamplesRoutingModule } from './pipes-examples-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent
  ],
  imports: [
    CommonModule,
    PipesExamplesRoutingModule,
		MaterialComponentsModule
  ]
})
export class PipesExamplesModule { }
