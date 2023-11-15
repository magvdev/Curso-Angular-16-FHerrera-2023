import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {
	private activatedRoute = inject(ActivatedRoute);
	private router = inject(Router);
	private countriesService = inject(CountriesService);

	public country?: Country;
	public loading = true;

	ngOnInit(): void {
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
      });
	}
}
