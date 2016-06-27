import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  private topics: string [];
  private currentTopic: string = 'rules';
  constructor() {this.topics = ['Origins', 'Rules', 'Videos', 'News'];}
  ngOnInit() {


  }

  setTopic(topic): void {
    this.currentTopic = topic.toLowerCase();
  }
}
