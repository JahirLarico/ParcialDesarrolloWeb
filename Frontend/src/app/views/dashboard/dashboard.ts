import { Component } from '@angular/core';
import { env } from '../../enviroment/enviroment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  races: any[] = [];

  dog = {
    name: '',
    age: '',
    raceId: ''
  };
  constructor(private router: Router){}
  async ngOnInit(): Promise<void> {

    try {

      const response = await fetch(
        env.BASE_URL+'race/getAll'
      );

      this.races = await response.json();

    } catch (error) {

      console.error(error);

    }

  }
  async createDog(): Promise<void> {

    try {
      this.router.navigate(['/']);
    } catch (error) {

      console.error(error);

    }
  }
}
