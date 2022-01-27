import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../interface/tweet';

@Injectable({
  providedIn: 'root'
})

export class TweetsService {

  constructor(private http:HttpClient) { }

  getTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>('./assets/trumpTweets.json');
  }
}
