import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { GridComponent } from '../app/components/grid/grid.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../app/libs/services/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './components/app-project/app-project.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { MainComponent } from './components/main/main.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BsDatepickerModule} from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ProjectComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    InputsModule,
    BrowserAnimationsModule,
    DropDownsModule,
    GridModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, IntlModule, DateInputsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
