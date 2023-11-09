import { Component, inject } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

	private gifsService: GifsService = inject(GifsService);

	get tagHistory(): string[] {
		return this.gifsService.tagsHistory;
	}

}
