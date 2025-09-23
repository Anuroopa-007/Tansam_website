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
  // newsletterItems = [
  //   {
  //     title: 'img',
  //     desc: 'img',
  //     image: 'assets/bannerimage/entrepre-1.jpeg'
  //   },
  //   {
  //     title: 'img',
  //     desc: 'img',
  //     image: 'assets/bannerimage/entrepre-1.jpeg'
  //   },
  //   {
  //     title: 'img',
  //     desc: 'img',
  //     image: 'assets/bannerimage/entrepre-1.jpeg'
  //   },
  //   {
  //     title: 'img',
  //     desc: 'img',
  //     image: 'assets/bannerimage/entrepre-1.jpeg'
  //   },
  // ];
  programs = [
    {
      title: 'Hagenkvartetten',
      subtitle: 'Siste kveld med gjengen.',
      image: 'assets/bannerimage/entrepre-1.jpeg'
    },
    {
      title: 'Ssens Trio',
      subtitle: 'Kammermusikk i mange lag.',
      image: 'assets/bannerimage/entrepre-1.jpeg'
    },
    {
      title: 'Lise Davidsen',
      subtitle: 'Sjelgransking med Schubert.',
      image: 'assets/bannerimage/entrepre-1.jpeg'
    },
    {
      title: 'Esa-Pekka Salonen & Bergen Filharmoniske Orkester',
      subtitle: 'Turengalla – et moderne mesterverk om gleden og kjærligheten.',
      image:'assets/bannerimage/entrepre-1.jpeg'
    }
  ];

}
