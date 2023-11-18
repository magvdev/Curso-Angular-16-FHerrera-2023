import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { Region } from '../../../countries/interfaces/region.type';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit {
  @Input()
  public placeholder: string = '';

	@Input()
	public initialValue: string = '';

  @Output()
  public onSearchText = new EventEmitter<string>();

  private subscriptions = new Subscription();
  private debouncer: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.subscriptions.add(
      this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
        this.emitSearchText(value);
      })
    );
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

  emitSearchText(txtSearchText: string) {
    this.onSearchText.emit(txtSearchText);
    console.log('SearchBoxComponent-txtSearchText :>> ', txtSearchText);
  }
}
