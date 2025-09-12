import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { EmailService, RawMediaItem } from '../services/api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  mediaItems: RawMediaItem[] = [];
  labs: any[] = [];
  isMenuOpen = false;
  isDropdownOpen: { [key: string]: boolean } = {};
  isScrolled = false;

  constructor(private router: Router, private apiService: EmailService) {}

  ngOnInit() {
    this.apiService.getMediaCategories().subscribe({
      next: (data) => {
        this.mediaItems = data;
      },
      error: (err) => {
        console.error('Failed to load media categories', err);
      },
    });
  }

  toggleDropdown(dropdown: string) {
    Object.keys(this.isDropdownOpen).forEach((key) => {
      if (key !== dropdown) {
        this.isDropdownOpen[key] = false;
      }
    });
    this.isDropdownOpen[dropdown] = !this.isDropdownOpen[dropdown];
  }

  navigateToLab(labKey: string) {
    console.log('Navigate to:', labKey);
    this.closeMenu();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const isDropdownClick = (event.target as HTMLElement).closest('.dropdown');
    if (!isDropdownClick) {
      Object.keys(this.isDropdownOpen).forEach((key) => {
        this.isDropdownOpen[key] = false;
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollPosition > 200;
  }
}
