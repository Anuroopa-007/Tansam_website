import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css',
})
export class NewsletterComponent {
  newsletterItems = [
    {
      title: 'img',
      desc: 'img',
      image: 'assets/bannerimage/entrepre-1.jpeg'
    },
    {
      title: 'img',
      desc: 'img',
      image: 'assets/bannerimage/entrepre-1.jpeg'
    },
    {
      title: 'img',
      desc: 'img',
      image: 'assets/bannerimage/entrepre-1.jpeg'
    },
    {
      title: 'img',
      desc: 'img',
      image: 'assets/bannerimage/entrepre-1.jpeg'
    },
  ];
}
