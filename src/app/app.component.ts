import {Component} from '@angular/core';
import {UserService} from './services/user.service';
import {User} from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public userId: number;

  public user: User;

  public users: User[];

  constructor(private userService: UserService) {
  }

  public getUser() {
    this.userService.getUser(this.userId).subscribe(user => this.user = user);
  }

  public getAllUsers() {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }
}
