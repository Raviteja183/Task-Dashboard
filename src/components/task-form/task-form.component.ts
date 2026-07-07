import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
  } from '@angular/core';
  
  import { CommonModule } from '@angular/common';
  
  import {
    FormBuilder,
    FormGroup,
    Validators,
    ReactiveFormsModule
  } from '@angular/forms';
import { Task } from '../../models/task';
  
  
  @Component({
    selector: 'app-task-form',
    standalone: true,
    imports: [
      CommonModule,
      ReactiveFormsModule
    ],
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css']
  })
  export class TaskFormComponent implements OnInit, OnChanges {
  
    @Output()
    taskAdded = new EventEmitter<Task>();
  
    @Output()
    taskUpdated = new EventEmitter<Task>();
  
    @Input()
    selectedTask!: Task | null;
  
    taskForm!: FormGroup;
  
    isEditMode = false;
  
    constructor(private fb: FormBuilder) {
        this.createForm();
    }
  
    ngOnInit(): void {
  
    //   this.createForm();
  
    }
  
    ngOnChanges(changes: SimpleChanges): void {
  
      if (
        this.taskForm &&
        changes['selectedTask'] &&
        this.selectedTask
      ) {
  
        this.isEditMode = true;
  
        this.taskForm.patchValue({
  
          title: this.selectedTask.title,
  
          status: this.selectedTask.status,
  
          priority: this.selectedTask.priority,
  
          assignee: this.selectedTask.assignee,
  
          dueDate: this.selectedTask.dueDate
  
        });
  
      }
  
    }
  
    createForm() {
  
      this.taskForm = this.fb.group({
  
        title: [
          '',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ],
  
        status: [
          'Pending',
          Validators.required
        ],
  
        priority: [
          'Medium',
          Validators.required
        ],
  
        assignee: [
          '',
          Validators.required
        ],
  
        dueDate: [
          '',
          Validators.required
        ]
  
      });
  
    }
  
    submitForm() {
  
      if (this.taskForm.invalid) {
  
        this.taskForm.markAllAsTouched();
  
        return;
  
      }
  
      const task: Task = {
  
        id: this.isEditMode
          ? this.selectedTask!.id
          : Date.now(),
  
        ...this.taskForm.value
  
      };
  
      if (this.isEditMode) {
  
        this.taskUpdated.emit(task);
  
      } else {
  
        this.taskAdded.emit(task);
  
      }
  
      this.resetForm();
  
    }
  
    resetForm() {
  
      this.taskForm.reset({
  
        status: 'Pending',
  
        priority: 'Medium'
  
      });
  
      this.isEditMode = false;
  
    }
  
    get title() {
  
      return this.taskForm.get('title');
  
    }
  
    get assignee() {
  
      return this.taskForm.get('assignee');
  
    }
  
    get dueDate() {
  
      return this.taskForm.get('dueDate');
  
    }
  
  }