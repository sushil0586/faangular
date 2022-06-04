import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorize',
  templateUrl: './unauthorize.component.html',
  styleUrls: ['./unauthorize.component.scss']
})
export class UnauthorizeComponent implements OnInit {

  constructor(private router:Router) {
    sessionStorage.clear();
  }

  ngOnInit(): void {
  }

  login() {
this.router.navigate(['create-token']);
  }
}