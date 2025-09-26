import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css',
})
export class NewsletterComponent {
  programs = [
    {
      title: "HACKATHON",
      subtitle: "TANSAM's 2'nd Hackathon at Vivekananda College of Engineering for Women at Tiruchengode",
      image: 'assets/mainimage/papercut-1.jpeg'
    },
    {
      title: "TANSAM's 1'st HACKATHON",
      subtitle: 'JOY UNIVERSITY',
      image: 'assets/bannerimage/hackathon-1.jpeg'
    },
    {
      title: 'INTERNSHIP Valedictory Function',
      subtitle: 'Panimalar Engineering College',
      image: 'assets/mainimage/panimalar-hackathon.jpeg'
    },
    {
      title: 'HACKATHON',
      subtitle: "TANSAM's 3rd Hackathon at Excel Engineering College at Komarapalayam",
      image: 'assets/mainimage/pqpercut-2.jpeg'
    }
  ];

  selectedProgram: any = null;

  openModal(program: any) {
    this.selectedProgram = program;
  }

  closeModal() {
    this.selectedProgram = null;
  }
}
