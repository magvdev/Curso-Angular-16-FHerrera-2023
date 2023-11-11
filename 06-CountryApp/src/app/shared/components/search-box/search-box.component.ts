import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onSearchText = new EventEmitter<string>();

  emitSearchText(txtSearchText: string) {
    this.onSearchText.emit(txtSearchText);
    console.log('SearchBoxComponent-txtSearchText :>> ', txtSearchText);
  }
}
