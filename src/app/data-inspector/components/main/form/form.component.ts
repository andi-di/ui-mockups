import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'diu-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  @Input() instance: String;
  ngOnInit() {
    
  }

}
