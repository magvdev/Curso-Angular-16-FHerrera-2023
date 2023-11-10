import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input({ required: true }) src!: string;
  @Input() alternativeText: string = '';

	hasLoaded: boolean = false;

  ngOnInit(): void {
    
  }

	onImageLoad(): void {
		this.hasLoaded = true;
	}
}
