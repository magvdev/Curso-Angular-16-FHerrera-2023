import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.type';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
	
	public menuItems: MenuItem[] = [];
	
	ngOnInit(): void {
		this.menuItems = [
      {
        label: 'Pipes de Angular',
				icon: 'desktop_mac',
        subItems: [
          {
            label: 'Textos y Fechas',
            icon: 'notes',
						url: 'basics'
          },
          {
            label: 'Números',
            icon: 'attach_money',
						url: 'numbers'
          },
          {
            label: 'No Comunes',
            icon: 'public',
						url: 'uncommon'
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'settings',
      },
    ];
	}
}
