import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'src/app/core/core.module';
import { PokerService } from 'src/app/core/services/Poker/poker.service';
import { HomeModule } from '../home.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeModule, CoreModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent)
  });

  it('should create', () => {
    const instance = fixture.componentInstance
    expect(instance).toBeTruthy();
  });
});
