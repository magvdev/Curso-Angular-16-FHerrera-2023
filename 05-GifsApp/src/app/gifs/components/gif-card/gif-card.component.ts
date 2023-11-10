import { Component, Input, OnInit } from '@angular/core';

import { Gif } from '../../interfaces/giphyResponse.interface';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrl: './gif-card.component.css'
})
export class GifCardComponent implements OnInit {
	
	@Input({ required: true })
	gif!: Gif;
	
	ngOnInit(): void {
		if (!this.gif) throw new Error("GifCardComponent: gif is required");		
	}
}
