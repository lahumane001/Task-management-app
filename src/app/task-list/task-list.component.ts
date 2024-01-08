import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/taskService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskData: any;
  constructor(private httpServ: TaskService, private router: Router) { }

  ngOnInit(): void {
    // To fetch data from  database
    this.httpServ.getData().subscribe(res => {
      console.log(res);
      this.taskData = res;
    })
  }

  // Status to be completed as marked

  markAsCompleted(task: any, id: any): void {
    task.status = 'Completed';
    this.httpServ.updateData(id, task).subscribe(res => {
      console.log(res);

    });
  }
  // Navigate to detail component 

  onClick(id: any) {
    this.router.navigate(['/detail', id])
  }
  // To delete the data from list

  onDelete(id: number) {
    this.httpServ.deleteData(id).subscribe(res => {
      console.log(res);
      this.ngOnInit()
    })
  }

}
