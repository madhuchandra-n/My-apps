import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  _apiBaseUrl: any;

  constructor(private http: HttpClient) {
    var gcfModel = this.readGcfModelFromIndexHtml();

    this._apiBaseUrl = gcfModel['api'];
  }
  public get apiBaseUrl() { return this._apiBaseUrl; }
  public setApiBaseUrl(apiBaseUrl?) {
    if (apiBaseUrl)
      this._apiBaseUrl = apiBaseUrl;
  }
  public getData()
  {
    return this.http.get(this._apiBaseUrl);
  }
  private readGcfModelFromIndexHtml() {

    let json = document.getElementById("gcfModel").textContent.trim();

    return JSON.parse(json);
  }
  public _demoSubject: BehaviorSubject<any> = new BehaviorSubject(null);
 setSubject(value) {
    if (value) {
      this._demoSubject.next(value);
    } else {
      this._demoSubject.next(null)
    }
  }
}
