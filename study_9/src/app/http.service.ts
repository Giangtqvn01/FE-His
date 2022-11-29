import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Data } from './model/person';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  listOfData: Data[] = [
  ];
  constructor(private http: HttpClient) { }

  getData() {
    return of({ data: this.listOfData });
  }
  addData(payload: any) {
    let id = this.makeid(5);
    this.listOfData.push({ id: id, ...payload });
    return of({ data: { id: id, ...payload } });
  }
  makeid(length: any) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getDataById(id: any) {
    let data = this.listOfData.find(({ id }) => id ===id);
    return of({ data: data });
  }

  deleteData(payload:any){
    debugger;
    this.listOfData = this.listOfData.filter(data => payload?.indexOf(data) === -1);
    return of({ data: this.listOfData });
  }

}
