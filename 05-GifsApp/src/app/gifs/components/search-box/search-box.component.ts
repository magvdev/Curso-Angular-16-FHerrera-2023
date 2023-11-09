import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

	// @ViewChild('txtTagInput')
	// public tagInput!: ElementRef<HTMLInputElement>;

	private gifsService = inject(GifsService);

	searchTag(newTag: string) {
		this.gifsService.searchTag(newTag);
	}

	// searchTagByViewChild() {
	// 	const newTag = this.tagInput.nativeElement.value;
	// 	console.log('newTag :>> ', newTag);
	// }
}
