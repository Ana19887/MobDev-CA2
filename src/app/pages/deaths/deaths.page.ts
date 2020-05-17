import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    deaths: Observable<any>;
    search: string= '';
    
constructor( private api: ApiService) { }

  ngOnInit() { 
      
}    
  //function to search for the name of character and return the number of deaths
 SearchDeath(event) {
     this.search = event.target.value
   
    
    if (this.search ==""){
      this.deaths=this.api.getDeath("");
    
    }
    
    this.api.getDeath(this.search).subscribe(res =>{
       this.deaths = this.api.getDeath(this.search);
    }, err=>{
        this.deaths;
    
    });
     }
}
