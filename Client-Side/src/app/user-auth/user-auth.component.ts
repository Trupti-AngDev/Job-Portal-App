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
  // if (this.signupForm.valid) {
  //   const formData = this.signupForm.value;
  //   this.http.post<any>('http://localhost:3000/user/register', formData).subscribe(
  //     (response) => {
  //       console.log('Data pushed successfully:', response);
  //       // Perform any additional actions after successful data push
  //     },
  //     (error) => {
  //       console.error('Error pushing data:', error);
  //       // Handle error response
  //     }
  //   );
  // }
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
          
  logindata(data:any){ 
    // console.log(this.loginForm.value)

    this.auth.login(data).subscribe((response)=>{
      console.log("login Successfull",data)
      localStorage.setItem("Token",response.results.token)
      this.router.navigate(["/portalselection"])
    })
}
}
