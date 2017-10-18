import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'showUsers',
  templateUrl: './showUsers.component.html',
  styleUrls: ['./showUsers.component.css']
})
export class ShowUsersComponent implements OnInit{

  //#region Properties

  users: string;

  //#endregion

  constructor(private _appService: AppService) { }
  ngOnInit(): void {
    this._appService.getAllUsers()
      .subscribe(result => {
          this.users = result;
        },
        error => {
          this.users = <any>error;
        });
  }
}
