import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { InspectDialogComponent } from './inspect-dialog/inspect-dialog.component';

@Component({
  selector: 'diu-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  allTopics: Array<String> = [];
  subscribedTopics: Array<String> = [];
  topicInstances: Array<String> = [];
  currentTopic: String;
  currentInstance: String;

  ngOnInit() {
    for (let index = 1; index < 21; index++) {
      this.allTopics.push("Topic "+index.toString());
    }
  }

  subscribeTopic(topic: String) {
    if(!this.subscribedTopics.includes(topic)){
      this.subscribedTopics.push(topic);
    } 
  }

  unSubscribeTopic(topic: String) {
    this.subscribedTopics = this.subscribedTopics.filter(element => element != topic);
  }

  openDialog(item): void {
    // let dialogRef = this.dialog.open(InspectDialogComponent, {
    //   width: '90vw',
    //   data: {
    //     name: item
    //   }
    // });
    if(!this.currentInstance || this.currentInstance != item) {
      this.currentInstance = item;
    }
  }

  inspectTopic(topic: String){
    if(!this.currentTopic || this.currentTopic != topic) {
      this.currentTopic = topic;
      this.buildInstanceList();
    }
  }

  buildInstanceList() {
    this.topicInstances.splice(0, this.topicInstances.length);
    for (let index = 1; index < 21; index++) {
      this.topicInstances.push(this.currentTopic + " Instance "+index.toString());
    }
  }
}
