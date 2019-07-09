import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  _apiBaseUrl: any;
  _apiMockUrl: any;

  constructor(private http: HttpClient) {
    var gcfModel = this.readGcfModelFromIndexHtml();

    this._apiBaseUrl = gcfModel['api'];
    this._apiMockUrl = gcfModel['api1'];
  }
  public get apiBaseUrl() { return this._apiBaseUrl; }
  public setApiBaseUrl(apiBaseUrl?) {
    if (apiBaseUrl)
      this._apiBaseUrl = apiBaseUrl;
  } 
  public get apiMockUrl() { return this._apiMockUrl; }
  public setApiMockUrl(apiMockUrl?) {
    if (apiMockUrl)
      this._apiMockUrl = apiMockUrl;
  }
  public getData(value)
  {
    return this.http.get(this._apiBaseUrl+value);
  }
  public getMetaData()
  {
    return this.http.get(this._apiMockUrl);
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
