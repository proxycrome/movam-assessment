import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthObj } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit, OnDestroy {
  userInfo!: AuthObj
  userSubscription: Subscription | undefined;
  constructor(private authService: AuthService) {};

  ngOnInit(): void {
    this.userSubscription = this.authService.dataObj.subscribe(data => {
      this.userInfo = data;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }
}
