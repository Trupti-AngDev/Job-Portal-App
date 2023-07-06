import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JobPostComponent } from './job-post/job-post.component';


const routes: Routes = [
  {
    path:'',
    component:UserAuthComponent
  },
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'post-job',
    component:JobPostComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
