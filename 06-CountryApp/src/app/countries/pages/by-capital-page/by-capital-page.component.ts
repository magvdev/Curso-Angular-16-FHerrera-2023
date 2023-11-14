import { Component, inject } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

	private countriesService = inject(CountriesService);
	public countriesList: Country[] = [];

	searchByCapital(searchText: string): void {
		this.countriesService.searchByCapital(searchText).subscribe((countries: Country[]) => {
			this.countriesList = countries;
		});
	}
}
