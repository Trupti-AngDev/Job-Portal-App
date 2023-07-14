import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: [ './user-auth.component.css']
})
export class UserAuthComponent {
  username: any;
  loginForm=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  })

signupForm=new FormGroup({
  fName :new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]),
        lName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]),
        number:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
       email:new FormControl('',[Validators.required,Validators.email]),
       password:new FormControl('',[ Validators.required,Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]),
       cpassword:new FormControl('',[Validators.required,Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]),
       role:new FormControl('',[Validators.required])
})

     constructor(private fb:FormBuilder,private auth:AuthServiceService,private http: HttpClient,private router:Router) { 
     }
    ngOnInit(): void {
     
    }
    signupdata(data:any){
  // console.log(this.signupForm.value)
  this.auth.signup(data).subscribe((response)=>{
    console.log(response)
  })
  
      }
     
    get fName(){
      return this.signupForm.get('fName');
      }
      get lName(){
        return this.signupForm.get('lName');
        }
      get email(){
        return this.signupForm.get('email');
        }
        get password(){
          return this.signupForm.get('password');
          }
          get cpassword(){
            return this.signupForm.get('cpassword');
            }
            get number(){
              return this.signupForm.get('number');
              }
            get role(){
              return this.signupForm.get('number');
              }
            
          
  logindata(data:any){ 
    // console.log(this.loginForm.value)

if (this.loginForm.valid) {
  this.auth.login(data).subscribe({
    next: (response) => {
      console.log("Login Successful", data);
      localStorage.setItem("Token", response.results.token);
      this.router.navigate(["/portalselection"]);
      this.loginForm.reset();
    },
    error: (error) => {
      alert("Error in Login");
      // Handle error, display error message to the user, etc.
    },
  });
}
}
// google(){
//   this.auth.Google().subscribe({
//     next:(response)=>{
//       console.log(response)
//     },
//     error: (error) => {
//       console.log(error);
//       // Handle error, display error message to the user, etc.
//     },
//   })
// }
google() {
const popup = 
  window.open(
    "http://localhost:3000/user/google",
    
    "width=800,height=600,top=100,left=100,resizable=1,scrollbars=1",
    '_self'
  );
  let listener = window.addEventListener("message", (message) => {
    console.log("Response from backend", message.data.user);
    localStorage.setItem("Token", message.data.user.token);
    this.router.navigate(["/portalselection"]);
    this.loginForm.reset();
  });
}
}
