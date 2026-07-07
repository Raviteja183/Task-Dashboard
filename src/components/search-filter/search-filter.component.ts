import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {

  @Output() searchChanged = new EventEmitter<string>();
  @Output() statusChanged = new EventEmitter<string>();
  
  searchText = '';
  selectedStatus = 'All';

  onSearch() {
    this.searchChanged.emit(this.searchText);
  }

  onStatusChange() {
    this.statusChanged.emit(this.selectedStatus);
  }

}