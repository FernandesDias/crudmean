import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { CountryService } from '../../shared/country.service';
import { Country } from '../../country';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  countries: Country[];
  
  constructor(private _countryService:CountryService) { }
  
  ngOnInit(){
    this.readCountreis();
  }
  
  readCountreis()
  {
    this._countryService.readCountries().subscribe(
      data=>{
        console.log(data);
        this.countries = data['msg'];
      },
      error=>{
        console.log(error);
      }
    )
  }
  
}
