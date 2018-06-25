import { Component } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

    // declare an array of months

    months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  isAvailable = true; //variable is set to true
    
  myClickFunction(event){
    //just added console.log which will display the event details in browswe

    alert("Button is clicked");
    console.log(event);
  }

  changemonths(event) {
    alert("Changed month from the Dropdown");
 }
}
