import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomepageComponent } from './homepage/homepage.component';
import { JobPostComponent } from './job-post/job-post.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatIconModule} from '@angular/material/icon';
import{MatInputModule} from '@angular/material/input';
import{MatRadioModule} from '@angular/material/radio';
import{MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PortalSelectionComponent } from './portal-selection/portal-selection.component';

import{MatButtonModule} from '@angular/material/button'
import {MatDialogModule} from '@angular/material/dialog';




import { ProfessionalLabourDomainComponent } from './Domain/professional-labour-domain/professional-labour-domain.component';
import { SkilledLabourDomainComponent } from './Domain/skilled-labour-domain/skilled-labour-domain.component';

import { LaborCriteriaComponent } from './labor-criteria/labor-criteria.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogPostComponent } from './dialog-post/dialog-post.component'


@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,
    HomepageComponent,
    JobPostComponent,
    SettingComponent,
    ProfileComponent,
    ForgetPasswordComponent,
    PortalSelectionComponent,


    ProfessionalLabourDomainComponent,
    SkilledLabourDomainComponent,
    LaborCriteriaComponent,
    DashboardComponent,
    DialogPostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
