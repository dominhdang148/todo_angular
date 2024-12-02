import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/status';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      description: [''],
    });
  }
  taskForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}
  onSubmit() {
    if (this.taskForm.valid) {
      let task: Task = this.taskForm.value;
      task.status = Status.IN_PROGRESS;
      console.log(JSON.stringify(task));
    }
  }
}
