import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  @Input() total: number = 0;
  @Input() pending: number = 0;
  @Input() inProgress: number = 0;
  @Input() completed: number = 0;

}