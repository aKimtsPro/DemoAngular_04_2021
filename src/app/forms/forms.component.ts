import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form: FormGroup;

  constructor( builder: FormBuilder ) {
    
    this.form = builder.group(
      {
        'username': new FormControl('username par défaut', [ Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
        'email': new FormControl(null, [ Validators.required, Validators.email ]),
        'pswd': new FormControl(null, [ Validators.required, Validators.minLength(6)]),
        'confirm': new FormControl(null, [ Validators.required, Validators.minLength(6)])
      }
    )

  }

  ngOnInit(): void {
  }

  onSubmit(){
    if( this.form.valid )
      console.log( this.form.value )
    else
      alert('invalide')
  }

}
