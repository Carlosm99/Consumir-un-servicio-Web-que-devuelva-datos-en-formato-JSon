import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  paises: any;

  constructor( private dataServices: DataService) {}

  ngOnInit(){

   this.paises = this.dataServices.getCountries();
  //   .subscribe( countries => {
  //       console.log(countries);
  //   } );
  // }
  // title = 'consumirjson';
}
}
