import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  declarations: [TaskListComponent, TaskFormComponent],
  imports: [CommonModule],
})
export class TaskModule {}
