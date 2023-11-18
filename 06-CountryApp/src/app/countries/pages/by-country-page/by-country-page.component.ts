import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  private countriesService = inject(CountriesService);

	public initialSearchText = '';
  public countriesList: Country[] = [];
  public loading = false;

  ngOnInit(): void {
		console.log('ngOnInit');
    this.countriesList = this.countriesService.cacheStore.byCountry.countries;
		this.initialSearchText = this.countriesService.cacheStore.byCountry.term;
		console.log('this.initialSearchText :>> ', this.initialSearchText);
  }

  searchByCountry(searchText: string): void {
    this.loading = true;
    this.subscriptions.add(
      this.countriesService
        .searchByCountry(searchText)
        .subscribe((countries: Country[]) => {
          this.countriesList = countries;
          this.loading = false;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
