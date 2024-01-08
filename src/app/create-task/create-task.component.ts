import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../shared/taskService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit{

newTaskData!:FormGroup;

constructor(private httpServ:TaskService , private router:Router){}

  ngOnInit(): void {
    this.newTaskData = new FormGroup({
      title:new FormControl('' , Validators.required),
      desc:new FormControl('' , Validators.required),
      date:new FormControl('' , Validators.required),
      status : new FormControl('pending')
    })
  }
  addTask(){
    this.httpServ.postData(this.newTaskData.value).subscribe(res=>{
      console.log(res)
    })
    this.router.navigate([''])
    this.newTaskData.reset()
    console.log(this.newTaskData.value)
  }

}
