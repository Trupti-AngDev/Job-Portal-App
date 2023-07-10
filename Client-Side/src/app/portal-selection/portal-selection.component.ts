import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal-selection',
  templateUrl: './portal-selection.component.html',
  styleUrls: ['./portal-selection.component.css']
})
export class PortalSelectionComponent {
constructor(private router:Router){}

  jobProvider(){
  this.router.navigate(['/homepage'])
  }
}
