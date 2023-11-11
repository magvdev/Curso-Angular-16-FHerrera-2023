import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country';

const API_COUNTRIES_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

	private http = inject(HttpClient);

  searchByCapital( capital: string ): Observable<Country[]> {
		return this.http.get<Country[]>(`${API_COUNTRIES_URL}/capital/${capital}`);
	}
}
