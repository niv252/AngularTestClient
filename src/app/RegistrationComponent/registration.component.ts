import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{

  //#region Properties

  title: string;
  name : string;
  id : number;
  personalNumber : string;
  nationality : string;

  //#endregion

  constructor(private _appService: AppService) { }

  registerUser() : void{
    this._appService.addUser(this.id, this.name, this.personalNumber, this.nationality) .subscribe(result => {
      this.title = "Added Successfully"
      },
      error => {
        if(error.status == 400)
          this.title = "User Exist Already!";
        else
          this.title = <any>error;
      });;
  }
  updateUser() : void{
    this._appService.updateUser(this.id, this.name, this.personalNumber, this.nationality) .subscribe(result => {
      this.title = "Updated Successfully"
      },
      error => {
        if(error.status == 400)
          this.title = "User Doesn't Exist";
        else
          this.title = <any>error;
      });;
  }
}
