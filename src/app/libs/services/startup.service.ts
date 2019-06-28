import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private config: ConfigService
    ) { }
  public init(options?) {
  }
}
