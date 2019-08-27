import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import{ Router} from '@angular/router'

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor( private ps:ProductService,private rt:Router) { }
  adddetails;
  id;
  name;
  price;
  ngOnInit() {
  }
  newproduct(){
    this.ps.adddata(this.id,this.name,this.price).subscribe(data=>{
      this.adddetails=data;
      
    })
    this.rt.navigateByUrl("/view")
  }
}
