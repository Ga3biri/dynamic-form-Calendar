import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-worktime',
  templateUrl: './update-worktime.component.html',
  styleUrls: ['./update-worktime.component.scss']
})
export class UpdateWorktimeComponent implements OnInit {
  public submitted = false;
  constructor(private router: Router,private formbuilder:FormBuilder) { }

  
saturdayForm!:FormGroup;
sundayForm!:FormGroup;
mondayForm!:FormGroup;
tusedayForm!:FormGroup;
wedensdayForm!:FormGroup;
thursdayForm!:FormGroup;
fridayForm!:FormGroup;




  ngOnInit(): void {
    this.firstTime()
  }

  form = this.formbuilder.group({
    saturday:this.formbuilder.array([]),
    sunday:this.formbuilder.array([]),
    monday:this.formbuilder.array([]),
    tuseday:this.formbuilder.array([]),
    wedensday:this.formbuilder.array([]),
    thursday:this.formbuilder.array([]),
    friday:this.formbuilder.array([]),
  })

  get saturday(){
    return this.form.controls["saturday"] as FormArray;
  }
  get sunday(){
    return this.form.controls["sunday"] as FormArray;
  }
  get monday(){
    return this.form.controls["monday"] as FormArray;
  }
  get tuseday(){
    return this.form.controls["tuseday"] as FormArray;
  }
  get wedensday(){
    return this.form.controls["wedensday"] as FormArray;
  }
  get thursday(){
    return this.form.controls["thursday"] as FormArray;
  }
  get friday(){
    return this.form.controls["friday"] as FormArray;
  }
  get f() { return this.form.controls }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) { return }
    
  }


  

  firstTime(){
    const firstDay=this.formbuilder.group({
      from:['',Validators.required],
      to:['',Validators.required],
    });
    this.saturday.push(firstDay)
    this.sunday.push(firstDay)
    this.monday.push(firstDay)
    this.tuseday.push(firstDay)
    this.wedensday.push(firstDay)
    this.thursday.push(firstDay)
    this.friday.push(firstDay)
  }


  addTime(whichDay:any){
    
    switch(whichDay){
      case 1:
        const saturdayForm=this.formbuilder.group({
          from:['',Validators.required],
          to:['',Validators.required],
        });
        this.saturday.push(saturdayForm)

        break;
      case 2:
        const sundayForm=this.formbuilder.group({
          from:['',Validators.required],
          to:['',Validators.required],
        });
        this.sunday.push(sundayForm)
        break;
      case 3:
        const mondayForm=this.formbuilder.group({
          from:['',Validators.required],
          to:['',Validators.required],
        });
        this.monday.push(mondayForm)
        break;
      case 4:
        const tusedayForm=this.formbuilder.group({
          from:['',Validators.required],
          to:['',Validators.required],
        });
        this.tuseday.push(tusedayForm)
        break;
      case 5:
        const wedensdayForm=this.formbuilder.group({
          from:['',Validators.required],
          to:['',Validators.required],
        });
        this.wedensday.push(wedensdayForm)
        break;
      case 6:
        const thursdayForm=this.formbuilder.group({
          from:['',Validators.required],
          to:['',Validators.required],
        });
        this.thursday.push(thursdayForm)
        break;
      case 7:
        const fridayForm=this.formbuilder.group({
          from:['',Validators.required],
          to:['',Validators.required],
        });
        this.friday.push(fridayForm)
        break;
    }
  }

  deleteTime(dayIndex:any,whichDay:any){
    switch (whichDay){
      case 1:
        this.saturday.removeAt(dayIndex)
      break;
      case 2:
        this.sunday.removeAt(dayIndex)
      break;
      case 3:
        this.monday.removeAt(dayIndex)
      break;
      case 4:
        this.tuseday.removeAt(dayIndex)
      break;
      case 5:
        this.wedensday.removeAt(dayIndex)
      break;
      case 6:
        this.thursday.removeAt(dayIndex)
      break;
      case 7:
        this.friday.removeAt(dayIndex)
      break;
    }
    
  }



  submit(){
    console.log('this.form.value')
    console.log(this.form.value)
    
  }
}
