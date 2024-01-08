import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/taskService.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit{

  val:any;
  taskDetail:any
  constructor(private httpServ:TaskService , private activeroute:ActivatedRoute , private router:Router){}
  
  ngOnInit(): void {
    this.activeroute.params.subscribe((param: Params) => {
      this.val = param;
      console.log(this.val)
    })
    this.httpServ.getDataById(this.val.id).subscribe(res=>{
      console.log(res)
      this.taskDetail = res;
    })
  }
  onEdit() {
    this.router.navigate(['edit',this.val.id])
    }


}
