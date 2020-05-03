import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

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

  constructor(private fb: FormBuilder,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.onBoardingForm = this.fb.group({
      name: new FormControl({ value: 'test', disabled: true }, { updateOn: 'blur', validators: [Validators.required, Validators.minLength(5)] }),
      email: new FormControl('', [Validators.email, Validators.required]),
      dob: new FormControl(''),
      address: this.fb.group({
        addrLine1: new FormControl('', Validators.required),
        addrLine2: new FormControl(''),
        city: new FormControl(''),
        pin: new FormControl(''),
      }),
      pastExp: this.fb.array([
        this.buildForm()
      ])
    }, { updateOn: 'blur' });

    this.employeeService.getOnboardingData().subscribe(data =>
      // this.onBoardingForm.setValue(data)
      this.onBoardingForm.patchValue(data)
    );

    this.onBoardingForm.disable();

  }

  addExp() {
    const ageControl: FormControl = new FormControl('');
    this.onBoardingForm.addControl('age', ageControl);
    this.pastExp.push(this.buildForm())
  }


  private buildForm() {
    return this.fb.group({
      orgName: new FormControl('', Validators.required),
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

  saveEmployeeData() {
    console.log(this.onBoardingForm.getRawValue());
    // this.onBoardingForm.get('name').disable();
  }

  edit() {
    this.onBoardingForm.enable();
  }
}
