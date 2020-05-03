import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, FormsModule } from '@angular/forms';

@Component({
  selector: 'dnt-employee-onboarding',
  templateUrl: './employee-onboarding.component.html',
  styleUrls: ['./employee-onboarding.component.css']
})
export class EmployeeOnboardingComponent implements OnInit {

  onBoardingForm: FormGroup;

  get pastExp() {
    return this.onBoardingForm.get('pastExp') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.onBoardingForm = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      dob: new FormControl(''),
      address: this.fb.group({
        addrLine1: new FormControl(''),
        addrLine2: new FormControl(''),
        city: new FormControl(''),
        pin: new FormControl(''),
      }),
      pastExp: this.fb.array([
        this.buildForm()
      ])
    })

  }

  addExp() {
    const ageControl: FormControl = new FormControl('');
    this.onBoardingForm.addControl('age', ageControl);
    this.pastExp.push(this.buildForm())
  }


  private buildForm() {
    return this.fb.group({
      orgName: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
      role: new FormControl(''),
    });
  }

  removeExp(i: number) {
    this.pastExp.removeAt(i);
  }

  removeAllExp() {
    this.pastExp.clear();
    this.addExp();
  }
}
