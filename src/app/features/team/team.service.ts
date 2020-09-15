import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(this.apiUrl + `team/${id}`);
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl + `team`);
  }

  addTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.apiUrl + `team/`, team);
  }

  updateTeam(team: Team): Observable<Team> {
    return this.http.put<Team>(this.apiUrl + `team/${team.Id}`, team);
  }

  deleteTeam(id: number): Observable<Team> {
    return this.http.delete<Team>(this.apiUrl + `team/${id}`);
  }
}
