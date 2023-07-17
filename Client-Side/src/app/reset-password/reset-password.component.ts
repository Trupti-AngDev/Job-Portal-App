import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
reset() {
throw new Error('Method not implemented.');
}
resetForm: FormGroup<any> | undefined;

  constructor(private fb:FormBuilder, private auth:AuthServiceService) { 
    
  }
 
}


