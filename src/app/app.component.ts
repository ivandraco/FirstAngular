import { Component } from '@angular/core';

import {DataService} from './data.service';
import {Post} from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  namefr: string="Jhon Carter";
  agefr: number=28;

  users = ['ryan','joe','cameron','john','bruce'];
  activated: boolean = true;

 
  //ejemplo diferentes tipos variables
 /*  name: string="Ryan Ray";
  age : number=28;
  address:{
    street:string;
    city:string;
  }
 
  hobbies:string[]=['swimming','read',' write'];

   constructor(){
     this.age=28;
     this.address={
        street:'221B Baker Street',
        city:'Londres'
     };
     this.hobbies=['swimming','read',' write'];


  }*/

  //ejemplo botones

  usersbt: string[]= ['ryan','joe','cameron'];

  sayHello(userbt){
      alert("Hello "+userbt);

  }

  deleteUser(userbt){
      for (let i =0; i< this.usersbt.length;i++){
        if(userbt == this.usersbt[i]){
            this.usersbt.splice(i,1);
        }
      }
    
  }

  addUser(newUser){
    console.log(newUser.value);

    this.usersbt.push(newUser.value);

    newUser.value="";
    newUser.focus();
    return false;
  }

   // Ejemplo Obtener datos json desde REST API
 
   posts: Post[]; 

   constructor(private dataService: DataService){
      this.dataService.getData().subscribe(data =>{
          this.posts= data;
      });      

    }

}
