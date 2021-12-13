import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task'
import { TASKS } from '../../mock-tasks'

@Component({
  selector: 'Tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS
  constructor() { }

  ngOnInit(): void {
  }

}
