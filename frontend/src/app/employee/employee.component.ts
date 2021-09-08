import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {
  empForm : FormGroup;
  showModal:boolean = false;
  editMode:boolean = false;

  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.empForm = this.fb.group({
      _id: [''],
      name: ['Eg. Akshay', Validators.required],
      position: ['Eg. Full Stack Developer', Validators.required],
      dept: ['Development']
    })
  }

  onEmpSubmit(){
   
  }

  onEditEmployee(){
   
  }

  onDeleteEmployee(id){
    
  }

  onAddEmployee(){
    
  }

  onCloseModal(){
  
  }

  onReset(){

  }
    
}