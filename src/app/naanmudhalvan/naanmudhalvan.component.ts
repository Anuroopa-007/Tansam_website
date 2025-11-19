import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-naanmudhalvan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './naanmudhalvan.component.html',
  styleUrls: ['./naanmudhalvan.component.css']
})
export class NaanmudhalvanComponent implements OnInit {
  headers: string[] = [];
  ongoingData: any[] = [];
  completedData: any[] = [];
  ongoingTotal: any = {};
  completedTotal: any = {};

  // New properties for Testimonials & Training Videos
  testimonials: any[] = [];
  trainingVideos: any[] = [];

  currentTestimonialIndex = 0;
  trainingCurrentIndex = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTableData();
    this.loadTestimonials();
    this.loadTrainingVideos();
  }

  loadTableData() {
    this.http.get<{ headers: string[], data: any[] }>('/assets/Json/upskilling.json')
      .subscribe(response => {
        this.headers = response.headers.filter(header => header !== "STATUS" && header !== "SL.NO");

        this.ongoingData = response.data.filter(row => row.STATUS === "Ongoing");
        this.completedData = response.data.filter(row => row.STATUS === "Completed");

        this.ongoingTotal = this.calculateTotal(this.ongoingData);
        this.completedTotal = this.calculateTotal(this.completedData);
      });
  }

  calculateTotal(data: any[]): any {
    let total: any = {};

    this.headers.forEach(header => {
      if (header === "COURSE" || header === "INSTITUTION TYPE" || header === "YEAR/SEM") {
        total[header] = "";
      } else {
        total[header] = 0;
      }
    });

    data.forEach(row => {
      this.headers.forEach(header => {
        if (typeof row[header] === "number") {
          total[header] += row[header];
        }
      });
    });

    return total;
  }

  // =========================
  // Load Testimonials
  // =========================
  loadTestimonials() {
    this.http.get<any[]>('/assets/Json/testimonials.json')
      .subscribe(response => {
        this.testimonials = response;
      });
  }

  // =========================
  // Load Training Videos
  // =========================
  loadTrainingVideos() {
    this.http.get<any[]>('/assets/Json/trainingVideos.json')
      .subscribe(response => {
        this.trainingVideos = response;
      });
  }

    // Carousel helper
  get visibleTestimonials() {
    const total = this.testimonials.length;
    if (total === 0) return [];

    return [
      this.testimonials[(this.currentTestimonialIndex) % total],
      this.testimonials[(this.currentTestimonialIndex + 1) % total],
      this.testimonials[(this.currentTestimonialIndex + 2) % total],
    ];
  }

  prevTestimonial() {
    this.currentTestimonialIndex =
      (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  nextTestimonial() {
    this.currentTestimonialIndex =
      (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  get visibleTrainingVideos() {
  const total = this.trainingVideos.length;
  if (total === 0) return [];

  return [
    this.trainingVideos[(this.trainingCurrentIndex) % total],
    this.trainingVideos[(this.trainingCurrentIndex + 1) % total],
    this.trainingVideos[(this.trainingCurrentIndex + 2) % total],
  ];
}

prevTraining() {
  this.trainingCurrentIndex =
    (this.trainingCurrentIndex - 1 + this.trainingVideos.length) % this.trainingVideos.length;
}

nextTraining() {
  this.trainingCurrentIndex =
    (this.trainingCurrentIndex + 1) % this.trainingVideos.length;
}
}
