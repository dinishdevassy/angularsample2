import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  result;
  view:Boolean=false;
  view1:Boolean=false;
  constructor(private ps:ProductService) { }

  ngOnInit() {
  }
show(){
  this.view=!this.view;
  this.view1=false;
  this.ps.getdata().subscribe(data=>{
    this.result=data;
  })
}
change(){
  this.view1=true;
  console.log(this.result[0].pid)

}

}
