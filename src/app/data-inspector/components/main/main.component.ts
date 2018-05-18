import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { InspectDialogComponent } from './inspect-dialog/inspect-dialog.component';

@Component({
  selector: 'diu-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  allTopics: Array<String> = [];
  subscribedTopics: Array<String> = [];

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
    let dialogRef = this.dialog.open(InspectDialogComponent, {
      width: '90vw'
    });
  }

}
