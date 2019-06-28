import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from 'src/app/libs/services/config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  selectedPost: any;
  project: any;
  names: any;
  newPost: any;
  newAns: any;
  newAns1: void;
  items: string;
  @Input() id: string;
  constructor(public apiUrl: ConfigService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.apiUrl._demoSubject.subscribe(res=>{
      this.id=res;
      this.fetchData();    

    });
  }
  private fetchData()
  {
    this.apiUrl.getData("values").subscribe(response=>{ 
      this.project = response;
        for( let i=0; i<this.project.items.length; i++)
        {
          if(this.project.items[i].id==this.id)
          {
            this.newAns1=this.project.items[i];
          }
        }
    },
      (err:HttpErrorResponse) => {
        console.log(err.message)
      }
    );
  }
  addItem(newItem: string) {
    this.items=newItem;
  }
}
