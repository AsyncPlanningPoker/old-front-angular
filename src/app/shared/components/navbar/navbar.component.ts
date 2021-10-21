import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string = "";
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.username = this.authService.decode().email;
  }

  logOut(){

    const token = window.localStorage.getItem('planning-poker-token');
    if(token != null){
      window.localStorage.removeItem('planning-poker-token')
    }
    this.router.navigate(['poker','login']);
  }

  

}
