import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-latestnews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latestnews.component.html',
  styleUrl: './latestnews.component.css',
})
export class LatestnewsComponent {
  isPlaying = false;
  safeVideoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  newsVideo = {
    title: 'Avadi School Students Experience Industry 4.0 at TANSAM',
    date: '23 Feb 2026',
    category: 'IV',
    videoUrl: 'https://www.youtube-nocookie.com/embed/L3RXcQNSDtE',
    thumbnail: 'https://img.youtube.com/vi/L3RXcQNSDtE/maxresdefault.jpg',
  };

  playVideo() {
    this.isPlaying = !this.isPlaying;

    if (this.isPlaying) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.newsVideo.videoUrl +
          '?autoplay=1&rel=0&modestbranding=1&playsinline=1',
      );
    } else {
      this.safeVideoUrl = null;
    }
  }
}
