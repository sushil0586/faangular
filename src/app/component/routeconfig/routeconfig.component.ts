import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routeconfig',
  templateUrl: './routeconfig.component.html',
  styleUrls: ['./routeconfig.component.scss']
})
export class RouteconfigComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout():void{
    sessionStorage.clear();
    this.router.navigate(['/create-token']);
  }
}