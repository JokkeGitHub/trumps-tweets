import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../interface/tweet';
import { TweetsService } from '../service/tweets.service';
// TweetService? (CountryService)

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})

export class TwitterComponent implements OnInit {

  tweets: Tweet[] = [];

  constructor(private tweetsService: TweetsService) { }

  ngOnInit(): void {
    this.tweetsService.getTweets().subscribe((data: Tweet[]) => {
      next: this.tweets = data;
    })
  }
}
