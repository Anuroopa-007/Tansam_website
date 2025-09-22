import { Component } from "@angular/core";

interface InfoBlock {
  title: string;
  items: string[];
  icon?: string; // optional inline SVG name
}
interface CourseDetail {
  domain: string;
  software: string[];
  jobs: string[];
}
@Component({
  selector:'app-skillingprogram',
  imports:[],
  standalone:true,
  templateUrl:'./skillingprogram.html',
  styleUrl:'./skillingprogram.css'
})

export class SkillingProgram{

  heroTitle = 'Skilling Ecosystem';
  heroSubtitle = 'Empowering industries, academia, and professionals with future-ready skills';

  corporates: InfoBlock[] = [
    { title: 'Engagement', items: ['Study & analyze improvement areas in the shop floor', 'Conduct demonstrable PoCs & Deploy solutions'], icon: 'document' },
    { title: 'Skills Utilized', items: ['Lean, Six Sigma Methodologies', 'Factory Automation, Plant Process, KPIs', 'Industry 4.0 Skills'], icon: 'tools' },
    { title: 'Industry Type', items: ['Automotive', 'Heavy Engineering', 'Leather', 'Food'], icon: 'industry' },
    { title: 'Execution', items: ['Skilling', 'Research', 'Consulting', 'Engineering Services'], icon: 'settings' }
  ];

  corporateStats = [
    { label: 'Unique Skills', value: '~12' },
    { label: 'Beneficiaries', value: '~1500' },
    { label: 'Learning Hours', value: '~1,00,000' },
    { label: 'Institutions', value: '~100' }
  ];

  courses = [
    'PCB Design', 'Advanced MFR.', 'Data Analytics',
    'PLC Programming', 'Industry 4.0', 'Machine Learning',
    'Product Lifecycle Mgmt', 'Industrial IoT', 'Low Code Web Dev',
    'Generative AI', 'Web & Mobile Dev', 'AR / VR'
  ];

  selectedCourse: CourseDetail | null = null; // holds the clicked course details
  selectedCourseName: string | null = null;

  courseData: { [key: string]: CourseDetail } = {
    "PCB Design": { domain: "Embedded Systems", software: ["KICAD", "Proteus", "EasyEDA"], jobs: ["PCB Design Engineer", "Embedded Systems Engineer"] },
    "Advanced MFR.": { domain: "Innovative Manufacturing", software: ["NXCAD", "Simcenter"], jobs: ["Manufacturing Engineer"] },
    "Data Analytics": { domain: "Digital Technologies", software: ["Excel", "Power BI", "Google Colab"], jobs: ["Data Scientist", "Data Analyst"] },
    "PLC Programming": { domain: "Robotics & Process Automation", software: ["TIA Portal", "PLCSim"], jobs: ["Automation Engineer", "Robotics Engineer"] },
    "Industry 4.0": { domain: "Smart Factory", software: ["Simcenter", "Teamcenter"], jobs: ["Industry 4.0 Specialist"] },
    "Machine Learning": { domain: "Artificial Intelligence", software: ["PyCharm", "VS Code", "Colab"], jobs: ["AI Engineer"] },
    "Product Lifecycle Mgmt": { domain: "Product Lifecycle Management", software: ["Teamcenter", "Tecnomatix"], jobs: ["PLM Engineer"] },
    "Industrial IoT": { domain: "IoT & Edge Devices", software: ["Node-RED", "Insights Hub"], jobs: ["IoT Engineer", "Systems Engineer"] },
    "Low Code Web Dev": { domain: "Full Stack Development", software: ["VS Code", "Postman"], jobs: ["Web Developer", "App Developer"] },
    "Generative AI": { domain: "AI & RPA", software: ["Google Colab"], jobs: ["AI Engineer"] },
    "Web & Mobile Dev": { domain: "Digital Technologies", software: ["React", "Node.js"], jobs: ["Frontend Developer", "Full Stack Developer"] },
    "AR / VR": { domain: "AR/VR Technologies", software: ["Unity3D", "Blender"], jobs: ["AR/VR Developer"] }
  };

  // Function triggered when a course button is clicked
  showCourse(name: string) {
    this.selectedCourse = this.courseData[name];
    this.selectedCourseName = name;
  }
}


