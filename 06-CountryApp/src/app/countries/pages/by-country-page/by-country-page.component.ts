import { Component, inject } from '@angular/core';

import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  private countriesService = inject(CountriesService);
  public countriesList: Country[] = [];

  searchByCountry(searchText: string): void {
    this.countriesService
      .searchByCountry(searchText)
      .subscribe((countries: Country[]) => {
        this.countriesList = countries;
      });
  }
}
