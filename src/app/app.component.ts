import { Component } from '@angular/core';
import { StartupService } from './libs/services/startup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-apps';
  constructor (private core: StartupService){
    this.core.init();
  }
}
