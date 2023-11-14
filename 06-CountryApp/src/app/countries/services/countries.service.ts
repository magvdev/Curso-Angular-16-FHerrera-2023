import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { Country } from '../interfaces/country';

const API_COUNTRIES_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private http = inject(HttpClient);

  searchCountryByAplhaCode(alphaCode: string): Observable<Country | null> {
    return this.http
      .get<Country[]>(`${API_COUNTRIES_URL}/alpha/${alphaCode}`)
      .pipe(
        tap((countries) => console.log(countries)),
				map((countries => countries.length > 0 ? countries[0] : null)),
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
        tap((countries) => console.log(countries)),
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
        tap((countries) => console.log(countries)),
        catchError((err) => {
          console.log('searchByCountry-error', err);
          return of([]);
        })
      );
  }

  searchByRegion(countryName: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${API_COUNTRIES_URL}/region/${countryName}`)
      .pipe(
        tap((countries) => console.log(countries)),
        catchError((err) => {
          console.log('searchByRegion-error', err);
          return of([]);
        })
      );
  }
}
