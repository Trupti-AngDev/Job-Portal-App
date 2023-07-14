import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JobPostComponent } from './job-post/job-post.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PortalSelectionComponent } from './portal-selection/portal-selection.component';
import { SkilledLabourDomainComponent } from './Domain/skilled-labour-domain/skilled-labour-domain.component';
import { ProfessionalLabourDomainComponent } from './Domain/professional-labour-domain/professional-labour-domain.component';
import { LaborCriteriaComponent } from './labor-criteria/labor-criteria.component';
import { DashboardComponent } from './dashboard/dashboard.component';



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
  {
    path:'portalselection',
    component:PortalSelectionComponent
  },
  {

    path:'laborcriteria',
    component:LaborCriteriaComponent
  },
  {


    path:'skilledLabor',
    component:SkilledLabourDomainComponent
  },
  {
    path:'professional-labor',
    component:ProfessionalLabourDomainComponent

  },
  {
    path:'laborcriteria',
    component:LaborCriteriaComponent

  },
  {
    path:'dashboard',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
