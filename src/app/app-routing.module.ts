import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UpdateWorktimeComponent } from './update-worktime/update-worktime.component';


const routes: Routes = [
  {path:'',component:UpdateWorktimeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
