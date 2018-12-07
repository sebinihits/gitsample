import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my sample';
  name ='Sebin George';
  Age:number=45;
  Address:{Street:String,city:string};
  hobbies:String[];
visible :boolean;
  constructor()
  {
    this.name='Bush';
    this.Address= {Street:'first street',city:'Kochi'};
    this.hobbies=["reading","writing"];
    this.visible=false;
  }

  change(hb)
{this.visible=!this.visible;}

};


