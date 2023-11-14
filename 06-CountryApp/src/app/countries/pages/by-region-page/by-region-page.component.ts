import { Component, inject } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  private countriesService = inject(CountriesService);
  public countriesList: Country[] = [];

  searchByRegion(searchText: string): void {
    this.countriesService
      .searchByRegion(searchText)
      .subscribe((countries: Country[]) => {
        this.countriesList = countries;
      });
  }
}
