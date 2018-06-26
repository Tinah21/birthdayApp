import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  score =0;
  score1 = 0;

  constructor(public navCtrl: NavController) {

  }

  click3(){
    this.score+=3;
    console.log(this.score);
  }

  click30(){
    this.score1+=3;
    console.log(this.score1);
  }
  click2(){
    this.score+=2;
    console.log(this.score);

  }
  click20(){
    this.score1+=2;
    console.log(this.score1);

  }
  click1(){
    this.score+=1;
    console.log(this.score);

  }
  click10(){
    this.score1+=1;
    console.log(this.score1);

  }
  clear(){
    this.score = 0;
    console.log(this.score);

    this.score1 =0;
    console.log(this.score1);

  }

}
