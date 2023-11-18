import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription, switchMap } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit, OnDestroy {
	private activatedRoute = inject(ActivatedRoute);
	private router = inject(Router);
	private countriesService = inject(CountriesService);
	
	private subscriptions = new Subscription();
	
	public country?: Country;
	public loading = true;
	
	ngOnInit(): void {
		this.subscriptions.add(
			this.activatedRoute.params
      .pipe(
				switchMap(({ id }) =>
					this.countriesService.searchCountryByAplhaCode(id)
        )
			)
			.subscribe((country) => {				
				if (!country) return this.router.navigateByUrl('');
				this.loading = false;				
				return this.country = country;
			})
		);
	}

	ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}
}
		