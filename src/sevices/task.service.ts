import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl =
    'https://jsonplaceholder.typicode.com/todos';

  private tasksSubject =
    new BehaviorSubject<Task[]>([]);

  tasks$ =
    this.tasksSubject.asObservable();

  constructor(
    private http: HttpClient
  ) {}

  getTasks(): Observable<Task[]> {

    return this.http.get<any[]>(this.apiUrl).pipe(

      map((response) => {

        const tasks = response.map(item => {

          return {

            id: item.id,

            title: item.title,

            status: this.getStatus(item.completed),

            priority: this.getPriority(),

            assignee: this.getAssignee(),

            dueDate: this.getRandomDate()

          };

        });

        // this.tasksSubject.next(tasks);

        return tasks;

      })

    );

  }

  getTaskList(): Observable<Task[]> {

    return this.tasks$;

  }

  private getStatus(
    completed: boolean
  ): string {

    if (completed) {

      return 'Completed';

    }

    const status = [

      'Pending',

      'In Progress'

    ];

    return status[
      Math.floor(Math.random() * status.length)
    ];

  }

  private getPriority(): string {

    const priority = [

      'High',

      'Medium',

      'Low'

    ];

    return priority[
      Math.floor(Math.random() * priority.length)
    ];

  }

  private getAssignee(): string {

    const users = [

      'John Doe',

      'Lokesh',

      'David',

      'Anil',

      'Emma',

      'Sophia',

      'William',

      'Olivia'

    ];

    return users[
      Math.floor(Math.random() * users.length)
    ];

  }

  private getRandomDate(): string {

    const today = new Date();

    const future = new Date();

    future.setDate(

      today.getDate() +

      Math.floor(Math.random() * 30)

    );

    return future
      .toISOString()
      .split('T')[0];

  }

}