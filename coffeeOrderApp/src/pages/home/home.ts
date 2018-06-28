import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  increment = 0;
  value1;
  val1="" ;
  value2;
  val="";
  name;
  total =0;
  message = ""

  price = 7;

  summary : boolean;


  constructor(public navCtrl: NavController) {
      this.summary = false;
  }

  onOrder(){
    this.summary =true;

    if(this.value1==true){

      this.val1 ="+Whipped Cream";
      this.value1=false;
    }
     if (this.value2==true){
      this.val="+Chocolate";
      this.value2=false;
    }
   
   this.total= this.price * this.increment;
   this.message= "Thank you";

  }

  add(){
    
    if(this.increment >= 0){
      this.increment+=1;
    }
   
  }
  minus(){

    if(this.increment >= 1){
      this.increment -=1;
    }

  }
  reset(){
    this.summary=false;
    this.increment=0
  this.name="";

  }

}
