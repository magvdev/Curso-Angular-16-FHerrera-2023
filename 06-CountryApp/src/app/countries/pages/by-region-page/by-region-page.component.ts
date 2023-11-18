import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Subscription } from 'rxjs';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit, OnDestroy {
	private subscriptions = new Subscription();
	
  private countriesService = inject(CountriesService);
	
  public regions: Region[] = [
		'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];
  public selectedRegion?: Region;
  public loading = false;
	
  public countriesList: Country[] = [];	
  
	ngOnInit(): void {
		this.countriesList = this.countriesService.cacheStore.byRegion.countries;
		this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
	}
	
  searchByRegion(region: Region): void {
    this.loading = true;
    this.selectedRegion = region;
    this.subscriptions.add(
      this.countriesService
        .searchByRegion(region)
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
