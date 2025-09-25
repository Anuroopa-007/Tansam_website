import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
// Update the import path if your environment file is located elsewhere, for example:
import { environment } from '../../../environments/environment';
// Or create the file at '../../environments/environment.ts' if it does not exist.

export interface CourseRegistrationResponse {
  success: boolean;
  message: string;
  registrationId?: number;
}
export interface BaseEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  published: boolean;
}


@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private baseUrl =  environment.apiUrl;


  private internshipApplyPath = '/api/internship/apply';
  private contactPath = '/api/contact';
  private feedbackPath = '/api/feedback';
  private careersPath = '/api/careers/';

  private apiUrl = this.baseUrl + this.internshipApplyPath;
  private contactApiUrl = this.baseUrl + this.contactPath;
  private careersUrl = this.baseUrl + this.careersPath;
  private feedbackApiUrl = this.baseUrl + this.feedbackPath;

  constructor(private http: HttpClient) {}

  sendEmail(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl, formData, { headers }).pipe(
      catchError((error) => {
        console.error('Error sending email:', error);
        return throwError(() => new Error('Email sending failed'));
      })
    );
  }

  sendContactEmail(contactData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.contactApiUrl, contactData, { headers }).pipe(
      catchError((error) => {
        console.error('Error sending contact email:', error);
        return throwError(() => new Error('Contact email sending failed'));
      })
    );
  }
  getCareerJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.careersUrl).pipe(
      catchError((error) => {
        console.error('Error fetching career jobs:', error);
        return throwError(() => new Error('Failed to fetch career jobs'));
      })
    );
  }


  sendFeedbackEmail(feedbackData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.feedbackApiUrl, feedbackData, { headers }).pipe(
      catchError((error) => {
        console.error('Error sending feedback email:', error);
        return throwError(() => new Error('Feedback email sending failed'));
      })
    );
  }
}
