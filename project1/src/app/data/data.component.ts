import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  val;
  view:Boolean=false;
  view1:Boolean=false;
   num1;
   num2;
   wmsg;
   message;
  constructor(private ds:CalcService,private ss:SampleService ) { }
    


  ngOnInit() {

  }

  public add(){
    this.view=true;
    this.val=this.ds.sum(parseInt(this.num1),parseInt(this.num2));
  }
  public diff(){
    this.view=true;
    this.val=this.ds.difference(parseInt(this.num1),parseInt(this.num2));
  }

  // public show(){
  //   this.view1=true;
  //   this.wmsg=this.ds.display({name:this.message});
  // }

   show(){
    this.ss.getdata().subscribe(data=>{
      this.wmsg=data;
      console.log(data);
    })
  }

}
