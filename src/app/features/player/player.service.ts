import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(this.apiUrl + `player/${id}`);
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl + `player`);
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.apiUrl + `player/`, player);
  }

  updatePlayer(player: Player): Observable<Player> {
    return this.http.put<Player>(this.apiUrl + `player/${player.Id}`, player);
  }

  deletePlayer(id: number): Observable<Player> {
    return this.http.delete<Player>(this.apiUrl + `player/${id}`);
  }
}
