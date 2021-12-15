import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formateur } from './formateur';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class FormateurServiceService {
  private apiServerUrl = environment.apiBaseUrl;
  private apiServerDeleteUrl = environment.apiDeleteUrl;
  private apiServerAddUrl = environment.apiAddUrl;

  constructor(private http: HttpClient){}

  public getFormateurs(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(`${this.apiServerUrl}/formateur/all`);
  }

  public addFormateur(formateur: Formateur): Observable<Formateur> {
    return this.http.post<Formateur>(`${this.apiServerAddUrl}/formateur/add`, formateur);
  }

  public updateFormateur(formateur: Formateur): Observable<Formateur> {
    return this.http.put<Formateur>(`${this.apiServerUrl}/formateur/update`, formateur);
  }

  public deleteFormateur(formateurId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerDeleteUrl}/formateur/delete/${formateurId}`);
  }
}
