import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
// import  { LOCAL_STORAGE,WebStorageService } from 'angular-webstorage-service'


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
user;
val;
  // constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }
  constructor(){}

  ngOnInit() {
    //this.user=this.storage.get("username");
    this.user=localStorage.getItem("username");
  }
add(){
  //this.storage.set("username",this.val);
  localStorage.setItem("username",this.val)
}
}
