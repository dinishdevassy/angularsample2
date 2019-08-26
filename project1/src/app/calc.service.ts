import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  public sum(x:number,y:number){
    return x+y;
  }
  public difference(x:number,y:number){
    return x-y;
  }
  public display(x){
    return "welcome " + x.name;
  }

}
