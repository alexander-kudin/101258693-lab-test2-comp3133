import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getMissionList(): Observable<Mission[]> {
    return this.http.get<Mission[]>('https://api.spacexdata.com/v3/launches');
  }

  // getMissionDetails(missionSelected: Mission): Observable<Mission> {

  // }
}
