import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';

import { Country } from '../interfaces/country.interface';
import { cacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

const API_COUNTRIES_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private http = inject(HttpClient);

  public cacheStore: cacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { countries: [] },
  };
	constructor() {
		this.loadFromLocalStorage();
	}

	private loadFromLocalStorage() {
		if (!localStorage.getItem('cacheStore')) return;
		this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
	}

	private saveToLocalStorage() {
		localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
	}

  searchCountryByAplhaCode(alphaCode: string): Observable<Country | null> {
    return this.http
      .get<Country[]>(`${API_COUNTRIES_URL}/alpha/${alphaCode}`)
      .pipe(
        tap((countries) => {console.log(countries)}),
        map((countries) => (countries.length > 0 ? countries[0] : null)),
        catchError((err) => {
          console.log('searchCountryByAplhaCode-error', err);
          return of(null);
        })
      );
  }

  searchByCapital(capital: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${API_COUNTRIES_URL}/capital/${capital}`)
      .pipe(
        tap((countries) => {
					this.cacheStore.byCapital = { term: capital, countries };
					this.saveToLocalStorage();
				}),
        catchError((err) => {
          console.log('searchByCapital-error', err);
          return of([]);
        })
      );
  }

  searchByCountry(countryName: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${API_COUNTRIES_URL}/name/${countryName}`)
      .pipe(
        tap((countries) => {
					this.cacheStore.byCountry = { term: countryName, countries };
					this.saveToLocalStorage();
				}),
        catchError((err) => {
          console.log('searchByCountry-error', err);
          return of([]);
        })
      );
  }

  searchByRegion(region: Region): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${API_COUNTRIES_URL}/region/${region}`)
      .pipe(
        tap((countries) => {
					this.cacheStore.byRegion = { region, countries };
					this.saveToLocalStorage();
				}),
        catchError((err) => {
          console.log('searchByRegion-error', err);
          return of([]);
        })
      );
  }
}
