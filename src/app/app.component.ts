import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import AOS from 'aos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showBackToTop = false;
  title = 'tansam_new_cms';
  showPopup = false;
  currentImageIndex = 0;

  // Popup images
  popupImages = [
    'assets/bannerimage/page1.jpg',
    'assets/bannerimage/page2.jpg',
  ];
  dashOffset = 175.93;

  // Circular progress
  scrollPercentage = 0;
  showChatMessage = false;


  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit() {
    AOS.init();

    if (!sessionStorage.getItem('popupShown')) {
      this.showPopup = true;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Show button when scrolled > 300px
    this.showBackToTop = scrollTop > 300;

    // Calculate scroll percentage (0 to 100)
    this.scrollPercentage = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    // Update dash offset (175.93 = full circle, 0 = full progress)
    const circumference = 175.93;
    this.dashOffset = circumference - (circumference * this.scrollPercentage) / 100;

    this.cdr.detectChanges();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closePopup() {
    this.showPopup = false;
    sessionStorage.setItem('popupShown', 'true');
  }

  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  nextImage() {
    if (this.currentImageIndex < this.popupImages.length - 1) {
      this.currentImageIndex++;
    }
  }
  // Chatbot toggle
  toggleChatbotMessage() {
    this.showChatMessage = !this.showChatMessage;
  }
}
