import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JobPostComponent } from './job-post/job-post.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


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
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'setting',
    component:SettingComponent
  },
  {
    path:'forget',
    component:ForgetPasswordComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
