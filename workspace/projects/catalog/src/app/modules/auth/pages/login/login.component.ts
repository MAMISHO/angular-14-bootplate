import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../users/api/models/user.model';
import { ApiService } from '../../../users/api/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private apiService: ApiService, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {}

  public async login() {
    // Validar campos
    console.log(this.user);
    const success = await this.apiService.loginUser(this.user);
    console.log(success);
    this.router.navigate(['/', 'dashboard']).then(
      (nav) => console.log(nav),
      (err) => console.log(err)
    );
  }
}
