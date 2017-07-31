import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  private _datas = [];
  
  constructor(
  ) { }

  get datas() {
    return this._datas;
  }

  addData(data: string) {
    this._datas.push(data);
  }

  deleteData() {
    this._datas.pop();
  }
}
