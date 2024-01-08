import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../shared/taskService.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  editTaskData!: FormGroup;
  uId:any
  // editData:any
  constructor(private httpServ: TaskService, private router: Router , private activeroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.editTaskData = new FormGroup({
      title: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      status : new FormControl('pending')
      
    })
    this.activeroute.params.subscribe((param: Params) => {
      this.uId = param;
      console.log(this.uId)
    })
    this.httpServ.getDataById(this.uId.id).subscribe(res=>{
      console.log(res)
      // this.editData = res;
      this.editTaskData.patchValue(res)
    })
  }
  editTask() {
    console.log(this.editTaskData.value, this.uId.id);
    this.httpServ.updateData(this.uId.id,this.editTaskData.value).subscribe(res=>{
      console.log(res);
      
    })
    this.router.navigate([''])
  }
}