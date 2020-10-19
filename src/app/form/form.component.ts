import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.css' ]
})

export class FormComponent implements OnInit{

  form: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.form = this.fb.group({
      name: 'XYZ',
      email: 'xyz@email.com',
      feedback: ['Great'],
      comments: 'Comments appear here'
    });
  
  this.form.valueChanges.subscribe(console.log)
  }

  onSubmit(){
    this.form.setValue(this.form.valueChanges);
  }


}