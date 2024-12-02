import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TaskListComponent, TaskFormComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
})
export class TaskModule {}
