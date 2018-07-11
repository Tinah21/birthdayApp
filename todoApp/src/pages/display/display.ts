import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ACTIVITIES } from '../../mocks/todo.mocks';

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {
activityList = ACTIVITIES;
myTodo ="";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.myTodo = this.navParams.get("variable");
   console.log(this.myTodo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }

  goToAdd(){
    this.navCtrl.push("AddPage");
  }

 

}
