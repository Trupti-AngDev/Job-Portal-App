import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  forgetForm!:FormGroup;
  message:string = '' ;
  isProcess:boolean=false;
  change='d-none';
  Invalid:boolean=true
   que:any;
  changeValue(valid:boolean):void{
    this.Invalid=valid
  }
   constructor(private fb:FormBuilder, private auth:AuthServiceService) { 
     this.forgetForm = this.fb.group({
     email:['',Validators.compose([Validators.required,Validators.email])],
     })
   }
 
   ngOnInit(): void {}
  forget(){
     this.isProcess= true;
     const data =this.forgetForm.value;
     delete data['confirm']
    return this.auth.forget(data).subscribe((res: { success: any; message: string; })=>{
      if(res.success){
       this.isProcess= false;
       this.message="Password Changed";
       this.change="alert alert-success"
      }else{
        this.isProcess= false;
        this.message=res.message;
        this.change="alert alert-success"
      };
      
      this.forgetForm.reset();
    },(err: any) => {
     this.isProcess= false;
     this.message="Sommething Went Wrong";
     this.change="alert alert-danger"
    }
    )
  }
     get email(){
       return this.forgetForm.get('email');
       }
      
}


