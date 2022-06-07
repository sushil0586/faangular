import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.component.html',
  styleUrls: ['./create-token.component.scss']
})

export class CreateTokenComponent implements OnInit {
 public userName!: string;
 public email!: string;
 public password!: string;
 public token!: string;

  constructor(private tokenService: TokenService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  setValue() {
    this.userName = 'aditi';
    this.email = 'aditi@gmail.com';
    this.password = 'aditi';
    const user: User = { username: this.userName, email: this.email, password: this.password };
    this.tokenService.getToken(user)
      .subscribe(data => {
        this.token = data.token;
        sessionStorage.setItem("a-token", this.token);
        this.router.navigate(['/home']);
      });
  }

  clearValue() {
    this.userName = '';
    this.email = '';
    this.password = '';
  }
}