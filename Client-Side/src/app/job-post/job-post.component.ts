import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormControlName, AbstractControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { animate } from "@angular/animations";
import { Observable, retry, startWith } from "rxjs";
import { DropdownDataService } from "../services/dropdown-data.service";
import { response } from "express";

@Component({
  selector: "app-job-post",
  templateUrl: "./job-post.component.html",
  styleUrls: ["./job-post.component.css"],
})
export class JobPostComponent {

  constructor(private router: Router, private dropdownData:DropdownDataService) {}

   CountriesList :any= [];
   StatesList: any =[];
   CitiesList: any=[];
  

  postForm = new FormGroup({
    companyname: new FormControl("", [Validators.required]),
    position: new FormControl("", [Validators.required]),
    jobtype: new FormControl(),
    jd: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('',[  Validators.pattern(/^(?:\d{10}|\d{2}-\d{8}|\d{3}-\d{7})$/), Validators.required, ]),
    education: new FormControl(),
    qualification: new FormControl(),
    englishLevel: new FormControl(),
    country: new FormControl(),
    state: new FormControl(),
    city: new FormControl(),
    pincode: new FormControl('',[Validators.pattern(/^\d{6}$/),Validators.required])

  });

  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  ngOnInit(){
    this.dropdownData.getCountries().subscribe((response)=>{
     this.CountriesList = response;
      //console.log(response)
    })
    
  }
 onSelectCountry(event:any){
  //alert(event);
  this.dropdownData.getStates(event).subscribe((response)=>{
    this.StatesList = response;
    console.log(this.StatesList)
  })
 }

 onSelectState(event:any){
   alert(event);
  this.dropdownData.getCities(event).subscribe((response)=>{
    this.CitiesList = response;
    console.log(this.CitiesList)
  })
 }
  
  get CompanyName() {
    return this.postForm.get("companyname")
  }
  get Position() {
    return this.postForm.get("position")
  };
  get jobType(){
    return this.postForm.get('jobtype')
  }
 get JD(){
  return this.postForm.get('JD')
 }
  get Name() {
    return this.postForm.get("name");
  }
  get Email(){
   return this.postForm.get('email')
  }

  get Phone(){
    return this.postForm.get('phone')
  }
  get Education(){
    return this.postForm.get('education')
  }
  get Qualification(){
    return this.postForm.get('qualification')
  }
  get EnglishLevel(){
    return this.postForm.get('englishLevel')
  }
  get Country(){
    return this.postForm.get('country')
  }
  get State(){
    return this.postForm.get('state')
  }
  get City(){
    return this.postForm.get('city')
  }
  get Pincode(){
    return this.postForm.get('pincode')
  }
 
  onFormSubmit(event: any) {
   // console.log(this.postForm.value);
  }



  moveToCandidateForm() {
    //this.router.navigate(["candidate-requirement"]);
    const next= document.getElementById('next');
   
   
    if(next!=null){
       const candidateForm = document.getElementById('candidateForm');
      if(candidateForm!= null){
        candidateForm.style.display= 'block'
      }
      next.scrollTop= 0;
      next.scrollIntoView({behavior: "smooth" , block: "start"})
    }
  }
  
  moveToLocalityForm(){
    const next = document.getElementById('next');
    if(next!=null){
      const locationForm = document.getElementById('locationForm');
      if(locationForm!=null){
        locationForm.style.display = 'block';
        locationForm.scrollIntoView({behavior:'smooth', block:'start'})
      }
  
    }
  }

  back(){
    this.router.navigate(['post-job'])
    const basicInfoForm= document.getElementById('basicInfoForm');
      if(basicInfoForm!=null){
       basicInfoForm.scrollIntoView({behavior:"smooth"})
      }
     }

      

     post(){
     console.log(this.postForm.value);
     this.postForm.reset();
     }
}
