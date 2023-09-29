import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formCadastro!: FormGroup;

  constructor(private formBuilder: FormBuilder, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.formCadastro = this.formBuilder.group({
      nome: [null, [Validators.minLength(3), Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      dataNascimento: [null],
      senha: [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmarSenha: [null, Validators.required],
      tema: ['light'],
      
    }, {validator: this.ConfirmedValidator('senha', 'confirmarSenha')},)
  }


  onSubmit(){
    console.log(this.formCadastro.value);

    const userData = {
      nome: this.formCadastro.get('nome')?.value,
      tema: this.formCadastro.get('tema')?.value,
      dataNascimento: this.formCadastro.get('dataNascimento')?.value,

    }

    this.firebaseService.signup(
      this.formCadastro.get('email')?.value, this.formCadastro.get('senha')?.value, userData)
      .then(res=> {

      }, error=>{

        if(error.code === "auth/invalid-email"){
          this.formCadastro.controls['email'].setErrors({'invalid-email': true});
        }

        if(error.code === "auth/missing-password"){
          this.formCadastro.controls['senha'].setErrors({'missing-password': true});
        }

        
        if(error.code === "auth/weak-password"){
          this.formCadastro.controls['senha'].setErrors({'weak-password': true});
        }

                
        if(error.code === "auth/email-already-in-use"){
          this.formCadastro.controls['email'].setErrors({'email-already-in-use': true});
        }

      })
    
  }


  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors?.['confirmedValidator']) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }     
    }
}

}
