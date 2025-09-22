import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-entrepreneur-intro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './entrepreneur-intro.component.html',
  styleUrl: './entrepreneur-intro.component.css',
})
export class EntrepreneurIntroComponent {
  newsList = [
    {
      title: 'TANSAM Expands with Two New Spoke Centres in Hosur',
      date: '15SEP\'2025',
      image: 'assets/bannerimage/entrepre-1.jpeg'
    },
    {
      title: 'New Spoke CoE at SA Engineering College',
      date: '4SEP\'2025',
      image: 'assets/bannerimage/entrepre-1.jpeg'
    },
    {
      title: 'Orientation Program at Hindustan Institute of Technology and Science',
      date: '25AUG\'2025',
      image: 'assets/bannerimage/entrepre-1.jpeg'
    },
  ];
  constructor(private router: Router) {}

showMoreNews() {
    this.router.navigate(['/announcement']);
  }
}
