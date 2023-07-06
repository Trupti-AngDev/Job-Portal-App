import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: [ './user-auth.component.css']
})
export class UserAuthComponent {
  Invalid:boolean=true
  data: any;
    changeValue(valid:boolean):void{
      this.Invalid=valid
    }
     loginForm!:FormGroup
     constructor(private fb:FormBuilder,private auth:AuthServiceService) { 
       this.loginForm=this.fb.group({
         email:['',Validators.compose([Validators.required,Validators.email])],
         password:['',Validators.compose([Validators.required,Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)])],
   
       })
   
     }
   
     ngOnInit(): void {
      
     }
   login(data:any){
     console.warn(data)
     this.auth.login(data)
   alert('Login Successfull!!!!')
   }
   
   get email(){
     return this.loginForm.get('email');
     }
     get password(){
       return this.loginForm.get('password');
       }
}
