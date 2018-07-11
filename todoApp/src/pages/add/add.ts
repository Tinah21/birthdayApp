import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ACTIVITIES } from '../../mocks/todo.mocks';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  name;
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  activity(){
    this.navCtrl.push("DisplayPage");
  }
  addActivity(){
   
    this.navCtrl.push("DisplayPage",{variable:this.name});


  }

}
