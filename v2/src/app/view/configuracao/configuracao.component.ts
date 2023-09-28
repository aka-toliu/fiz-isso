import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.scss']
})
export class ConfiguracaoComponent implements OnInit {

  theme: string = 'light';
  editMode: boolean = false;

  user: any = localStorage.getItem('user');
  userID: any = JSON.parse(this.user).uid;

  userAuthProfile: any;

  userData: any = JSON.parse(this.user)

  userInfo: any;

  formProfile!: FormGroup;

  constructor(
    private firebaseService: FirebaseService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.formProfile = this.formBuilder.group({
      displayName: [this.userAuthProfile?.displayName],
      
    })


    this.disableFields()

  }

  enableEdit(){
    this.editMode = true;
    this.formProfile.controls['displayName'].enable();
  }

  disableFields(){
    this.formProfile.controls['displayName'].disable();
  }

  logout(){
    this.firebaseService.logout();
  }

  updateProfile(){
    this.firebaseService.changeProfile(this.formProfile.value);
    this.editMode = false;
    this.disableFields();
  }

  getUserInfo(){



    this.firebaseService.getUserInfo(this.userID).subscribe(data=>{
      this.userInfo = data[0];
      this.userAuthProfile = this.firebaseService.getProfileAuthData()

      console.log(this.userInfo);

      this.formProfile = this.formBuilder.group({
        displayName: [this.userAuthProfile?.displayName],
       
      })
      
      
    })
  }

}
