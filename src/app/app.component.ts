import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'getMestresses';
  isLogged = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isLogged = this.userService.isStaticLogged;

    this.userService.isLogged.subscribe((logged) => {
      this.isLogged = logged;
    });
  }
}
