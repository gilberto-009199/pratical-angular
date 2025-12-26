import { Component } from '@angular/core';
import { UserInfo } from './user-info/user-info';
import { UserPhoto } from './user-photo/user-photo';

@Component({
  selector: 'app-user',
  imports: [UserInfo, UserPhoto],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

}
