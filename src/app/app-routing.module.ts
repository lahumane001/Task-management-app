import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  {path:'' , component :TaskListComponent},
  {path:'create', component:CreateTaskComponent},
  {path:'edit/:id', component:EditTaskComponent},
  {path:'detail/:id' , component:TaskDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
