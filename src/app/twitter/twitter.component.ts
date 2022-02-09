import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../interface/tweet';
import { TweetsService } from '../service/tweets.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})

export class TwitterComponent implements OnInit {
  input:string = "";
  inputNumber:number = 0;

  tweets: Tweet[] = [];

  constructor(private tweetsService: TweetsService) { }

  ngOnInit(): void {
    this.tweetsService.getTweets().subscribe((data: Tweet[]) => {
      next: this.tweets = data;
    })
  }
}

//<p *ngIf="tweet.text.includes(input)" > {{ tweet.text }} </p>