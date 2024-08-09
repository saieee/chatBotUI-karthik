import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadPdfService {

  private uploadUrl = 'https://probable-space-fortnight-pqv5grv46gw379wp-8080.app.github.dev/api/upload'; // Adjust the URL if necessary

  constructor(private http: HttpClient) {}

  uploadFiles(path: string, files: File[]): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('path', path);
    files.forEach(file => formData.append('files', file, file.name));

    return this.http.post(this.uploadUrl, formData, { responseType: 'text' });
  }
}
