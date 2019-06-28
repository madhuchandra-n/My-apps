import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../libs/services/api.service';
import { ConfigService } from '../../libs/services/config.service';

@Component({
  selector: 'app-Grid',
  templateUrl: './Grid.component.html',
  styleUrls: ['./Grid.component.css']
})
export class GridComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  newPost: any;
  countOf: any;
  names: any;
  isFound: boolean;
  passingId: any;
  selectedRow: any;
  constructor(private httpService: HttpClient, private route: ActivatedRoute,public apiUrl: ConfigService) { }
  selectedPost = null;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedPost = params;
    });
    this.getPostMethod1();
  }
  private getPostMethod1() {
    this.apiUrl.getData("values").subscribe(val=>{
      this.newPost=val as string[];
      this.names=this.newPost.items;
      
      // console.log(this.names);
      // console.log(this.newPost.items.length);
    },
    (err:HttpErrorResponse) => {
      console.log(err.message)
    });
  }
  private myClickFunction(n)
  {
    console.log(n);
    this.passingId=n;
    this.addNewItem(this.passingId);
    this.selectedRow=n;
  }
  addNewItem(value: any) {
    this.newItemEvent.emit(value);
  }
}
