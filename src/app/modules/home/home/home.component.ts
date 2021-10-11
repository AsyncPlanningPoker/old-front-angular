import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email!: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.email = this.authService.decoderToken().email
  }

}
