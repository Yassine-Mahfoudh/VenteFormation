import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Formation } from './formation';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class FormationService {
  private apiServerUrl = environment.apiBaseUrl;
  private apiServerDeleteUrl = environment.apiDeleteUrl;
  private apiServerAddUrl = environment.apiAddUrl;

  constructor(private http: HttpClient){}

  public getFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${this.apiServerUrl}/formation/all`);
  }

  public addFormation(formation: Formation): Observable<Formation> {
    return this.http.post<Formation>(`${this.apiServerAddUrl}/formation/add`, formation);
  }

  public updateFormation(formation: Formation): Observable<Formation> {
    return this.http.put<Formation>(`${this.apiServerUrl}/formation/update`, formation);
  }

  public deleteFormation(formationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerDeleteUrl}/formateur/delete/${formationId}`);
  }
}
