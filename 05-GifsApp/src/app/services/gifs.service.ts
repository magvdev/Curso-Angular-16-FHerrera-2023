import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Gif, GiphyResponse } from '../gifs/interfaces/giphyResponse.interface';

const GIPHY_API_KEY: string = '5zjBhZiA7CJTRbfdJ3N7engu8AWdruNQ';
const GIPHY_API_URL: string = 'https://api.giphy.com/v1/gifs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

	private _tagsHistory: string[] = [];
	private http: HttpClient = inject(HttpClient);

	public gifList: Gif[] = [];

  constructor() { }

	get tagsHistory(): string[] {
		return [...this._tagsHistory];
	}

	private organizeHistory(tag: string): void {		

		if (this._tagsHistory.includes(tag)){
			this._tagsHistory = this._tagsHistory.filter( item => item !== tag);
		}
		this._tagsHistory = this._tagsHistory.splice(0, 9);
	}

	public searchTag(tag: string): void{
		if (!tag.trim()) return;

		tag = tag.toLowerCase();

		this.organizeHistory(tag);

		this._tagsHistory.unshift(tag);

		const params = new HttpParams()
		.set('api_key', GIPHY_API_KEY)
		.set('q', tag)
		.set('limit', '10');

		// const endpoint = `${GIPHY_API_URL}/search?api_key=${GIPHY_API_KEY}&q=${tag}&limit=10`;
		// console.log('endpoint :>> ', endpoint);

		this.http
      .get<GiphyResponse>(`${GIPHY_API_URL}/search`, { params })
      .subscribe((resp) => {
        console.log(resp.data);
				this.gifList = resp.data;
      });
	}

}
