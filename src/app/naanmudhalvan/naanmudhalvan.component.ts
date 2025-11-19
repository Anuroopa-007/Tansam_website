import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
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

  naanmudhalvan_events: any[] = [];


  @ViewChildren('videoPlayer') testimonialVideos!: QueryList<ElementRef<HTMLVideoElement>>;
  @ViewChildren('trainingVideoPlayer') trainingVideosRefs!: QueryList<ElementRef<HTMLVideoElement>>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTableData();
    this.loadTestimonials();
    this.loadTrainingVideos();
    this.loadEvents();
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

  // Load Events JSON
loadEvents() {
  this.http.get<any[]>('/assets/Json/naanmudhalvan_events.json').subscribe(response => {
    this.naanmudhalvan_events = response;
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

    pauseOtherVideos(type: 'testimonial' | 'training', centerIndex: number) {
    if (type === 'testimonial') {
      this.testimonialVideos.forEach((video, index) => {
        if (index !== centerIndex) video.nativeElement.pause();
      });
    } else {
      this.trainingVideosRefs.forEach((video, index) => {
        if (index !== centerIndex) video.nativeElement.pause();
      });
    }
  }


  nextTestimonial() {
    this.currentTestimonialIndex =
      (this.currentTestimonialIndex + 1) % this.testimonials.length;
    setTimeout(() => this.autoplayCenterVideo('testimonial'), 50);
  }

  prevTestimonial() {
    this.currentTestimonialIndex =
      (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
    setTimeout(() => this.autoplayCenterVideo('testimonial'), 50);
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

  nextTraining() {
    this.trainingCurrentIndex =
      (this.trainingCurrentIndex + 1) % this.trainingVideos.length;
    setTimeout(() => this.autoplayCenterVideo('training'), 50);
  }

  prevTraining() {
    this.trainingCurrentIndex =
      (this.trainingCurrentIndex - 1 + this.trainingVideos.length) % this.trainingVideos.length;
    setTimeout(() => this.autoplayCenterVideo('training'), 50);
  }

  autoplayCenterVideo(type: 'testimonial' | 'training') {
    if (type === 'testimonial') {
      this.testimonialVideos.forEach((video, index) => {
        if (index === 1) video.nativeElement.play();
        else video.nativeElement.pause();
      });
    } else {
      this.trainingVideosRefs.forEach((video, index) => {
        if (index === 1) video.nativeElement.play();
        else video.nativeElement.pause();
      });
    }
  }


}
