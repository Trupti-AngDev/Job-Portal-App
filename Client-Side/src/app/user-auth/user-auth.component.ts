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
  signupForm!:FormGroup;
  loginForm!:FormGroup;

  Invalid:boolean=true;
  signup:FormGroup|any;
  isProcess:boolean=false;
  className='d-none';
   message: string | undefined;
login!:FormGroup;

  changeValue(valid:boolean):void{
    this.Invalid=valid
  }
     constructor(private fb:FormBuilder,private auth:AuthServiceService) { 
     }
    ngOnInit(): void {
      this.signupForm=this.fb.group({
        fName:['',([Validators.required,Validators.minLength(2),Validators.maxLength(10)])],
        lName:['',([Validators.required,Validators.minLength(2),Validators.maxLength(10)])],
        number:['',([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
       email:['',Validators.compose([Validators.required,Validators.email])],
       password:['',Validators.compose([ Validators.required,Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)])],
       cpassword:['',Validators.compose([Validators.required,Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)])],
      })
  
    }
    signupdata(signup:FormGroup){
      this.isProcess= true;
      const data =this.signupForm.value;
      delete data['confirm']
      this.auth.signup(data).subscribe((res: { success: any; })=>{
       if(res.success){
        this.isProcess= false;
        this.message="Account Has Been Created!!!!!!!!!!";
        this.className="alert alert-success"
       }
       this.signupForm.reset();
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


  logindata(login:FormGroup){
              }
  get lemail(){
   return this.signupForm.get('email');
                }
}
