import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from 'src/app/libs/services/config.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items: any;
  title = 'Projects';
  currentItem = 'items';
  constructor(public apiUrl: ConfigService) { }

  ngOnInit() {
    
  }
  addItem(newItem: string) {
    this.items=newItem;
    console.log(this.items);
    this.apiUrl.setSubject(this.items);

  }
}
