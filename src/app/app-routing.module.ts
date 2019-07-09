import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { GridComponent } from '../app/components/grid/grid.component';
import { ProjectComponent } from './components/app-project/app-project.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      // { path:'grid', component: GridComponent},
    // { path:'project', component: ProjectComponent},
      { path:'main/:postid', component: ProjectComponent},
      { path:'main', component: MainComponent},
      { path: '', redirectTo:'/main', pathMatch: 'full'}
    ])
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
