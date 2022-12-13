import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { filter, first, last, skip, take } from 'rxjs/operators';  
import { from } from 'rxjs';
import {Data} from 'src/app/model/person';

@Component({
  selector: 'app-exampletable',
  templateUrl: './exampletable.component.html',
  styleUrls: ['./exampletable.component.scss']
})
export class ExampletableComponent implements OnInit {
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly Data[] = [];
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  constructor(private _http:HttpService, private router: Router,) { }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data['id']));
    console.log(requestData);
    this._http.deleteData(requestData);
    this._getData();
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

  ngOnInit(): void {
   this._getData()
  }

  _getData(){
    this._http.getData().subscribe((data: any) =>{
      this.listOfData = data.data;
      console.log(this.listOfData);
    }
    );
  }

  _routerAdd(){
    this.router.navigate(['create']);
  }
  somefunction(id:any){
    this.router.navigate([`update/${id}`]);
  }

  functFilter(){
    this._getData()
    let listData :  Array<Data> = []
    from(this.listOfData).pipe(filter((x:any)=> x.disabled ===true)).subscribe((x) => listData.push(x));
    this.listOfData = listData;
  }

  functFirst(){
    this._getData()
   let listData :  Array<Data> = []
    from(this.listOfData).pipe(first()).subscribe((x) => listData.push(x));
    this.listOfData = listData;
  }

  functSkip(){
    this._getData()
    let listData :  Array<Data> = []
     from(this.listOfData).pipe(skip(2)).subscribe((x) => listData.push(x));
     this.listOfData = listData;
   }

   functTake(){
    this._getData()
    let listData :  Array<Data> = []
     from(this.listOfData).pipe(take(2)).subscribe((x) => listData.push(x));
     this.listOfData = listData;
   }

   functLast(){
    this._getData()
    let listData :  Array<Data> = []
     from(this.listOfData).pipe(last()).subscribe((x) => listData.push(x));
     this.listOfData = listData;
   }
}
