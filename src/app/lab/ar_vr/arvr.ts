import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector:'app-ar-vr',
  imports:[CommonModule],
  standalone:true,
  templateUrl:'./arvr.html',
  styleUrl:'./arvr.css'
})
export class ARVRComponent{
  overviewText: string = `The AR/VR/MR Research Lab is dedicated to pioneering immersive technologies that redefine how we train, learn, and interact with digital content. Our primary focus is on developing high-impact Virtual Reality (VR) simulations and training systems, while also exploring Augmented Reality (AR) and Mixed Reality (MR) to enhance real-world workflows and educational experiences. By blending cutting-edge 3D environments, intelligent interaction design, and real-time responsiveness, we create powerful immersive applications for industries including education, healthcare, manufacturing, and defence. Our goal is to provide scalable, repeatable, and measurable solutions that drive performance and reduce risk in real-world tasks.`;

  showFullOverview: boolean = false;
  wordLimit: number = 50;

  // Return true if overview exceeds the word limit
  get isTextLong(): boolean {
    return this.overviewText.split(' ').length > this.wordLimit;
  }

  // Return trimmed text with ellipsis
  get trimmedOverviewText(): string {
    const words = this.overviewText.split(' ');
    return words.slice(0, this.wordLimit).join(' ') + '...';
  }

  toggleOverview(): void {
    this.showFullOverview = !this.showFullOverview;
  }
}