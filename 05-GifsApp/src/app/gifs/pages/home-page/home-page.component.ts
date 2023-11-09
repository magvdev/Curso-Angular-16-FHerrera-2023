import { Component, inject } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';
import { Gif } from '../../interfaces/giphyResponse.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
	
	private gifsService: GifsService = inject(GifsService);

	get gifList(): Gif[] {
		return this.gifsService.gifList;
	}

}
