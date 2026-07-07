import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Task } from '../../models/task';
import { TaskService } from '../../sevices/task.service';
import { HeaderComponent } from '../header/header.component';
import { StatsComponent } from '../stats/stats.component';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    StatsComponent,
    SearchFilterComponent,
    TaskCardComponent,
    TaskFormComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {

  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  searchText = '';
  selectedStatus = 'All';

  private subscription = new Subscription();

  constructor(
    private taskService: TaskService,  private cdr: ChangeDetectorRef
  ) {}

 ngOnInit(): void {

  this.taskService.getTasks().subscribe({
    next: (tasks) => {
      this.tasks = [...tasks];
      this.filteredTasks = [...tasks];
      this.cdr.detectChanges();
      this.setTaskCOntainerHeight();
    },
    error: (err) => {
      console.error(err);
    }
  });
}

  onSearch(value: string): void {
    this.searchText = value;
    this.filterTasks();
  }

  onStatusChange(status: string): void {
    this.selectedStatus = status;
    this.filterTasks();
  }

  filterTasks(): void {
    this.filteredTasks = this.tasks.filter(task => {
      const searchMatch = task.title
        .toLowerCase()
        .includes(this.searchText.toLowerCase());
      const statusMatch =
        this.selectedStatus === 'All'
          ? true
          : task.status === this.selectedStatus;
      return searchMatch && statusMatch;
    });

  }

  addTask(task: Task): void {
    this.tasks.unshift(task);
    this.filterTasks();
  }

  get totalTasks(): number {
    return this.tasks.length;
  }

  get pendingTasks(): number {
    return this.tasks.filter(
      task => task.status === 'Pending'
    ).length;
  }

  get inProgressTasks(): number {
    return this.tasks.filter(
      task => task.status === 'In Progress'
    ).length;
  }

  get completedTasks(): number {
    return this.tasks.filter(
      task => task.status === 'Completed'
    ).length;
  }

  setTaskCOntainerHeight(): void {
    setTimeout(() => {
      const formContainer = document.getElementById('formContainer');
      const taskContainer = document.getElementById('taskContainer');
      if (formContainer && taskContainer) {
        taskContainer.style.height =
          formContainer.scrollHeight + 'px';
      }
    }, 100);
  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}