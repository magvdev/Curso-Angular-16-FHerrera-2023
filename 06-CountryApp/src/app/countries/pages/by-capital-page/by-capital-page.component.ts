import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit, OnDestroy {
	
	private subscriptions = new Subscription();
	private countriesService = inject(CountriesService);
	
	public initialSearchText = '';
	public countriesList: Country[] = [];
	public loading = false;
	
	ngOnInit(): void {
		this.countriesList = this.countriesService.cacheStore.byCapital.countries;
		this.initialSearchText = this.countriesService.cacheStore.byCapital.term;
	}	

	searchByCapital(searchText: string): void {
		this.loading = true;
		this.subscriptions.add(
			this.countriesService.searchByCapital(searchText).subscribe((countries: Country[]) => {
				this.countriesList = countries;
				this.loading = false;
			})
		);
	}

	ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}
}
