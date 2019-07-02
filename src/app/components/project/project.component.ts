import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from 'src/app/libs/services/config.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

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
  submitted = false;
  falseedited:boolean;

  userTypes: string[];
  modalTypes: string[];
  clickedTrue= false;
  SignupForm: FormGroup;
  payLoad: string;
  constructor(public apiUrl: ConfigService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
        this.SignupForm = new FormGroup({
          'project':new FormControl('project'),
          'client':new FormControl('client'),
          'details':new FormControl('details'),
          'code':new FormControl('code'),
          'code1':new FormControl('code1'),
          'git_repo':new FormControl('git_repo'),
          'start_date':new FormControl(new Date()),
          'end_date':new FormControl(new Date())
        });
    this.apiUrl._demoSubject.subscribe(res=>{
      this.id=res;
      this.fetchData();    
      this.clickedTrue=false;
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
  private changeToEdit(e)
  {
    this.clickedTrue=true;
  }
  private submitChange(e)
  {
    this.clickedTrue=false;
  }
  onSubmit() {
    debugger;
    console.log(this.SignupForm.value);
    this.payLoad = JSON.stringify(this.SignupForm.value);
  }
}
