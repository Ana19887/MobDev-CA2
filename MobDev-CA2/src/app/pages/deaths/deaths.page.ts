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

    deaths: any;
    search= "";
    
constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
       
      
}    
  
 onSearchChange(event) {
     
    this.search = event.target.value;
    this.deaths = this.api.searchDeath(this.search);
     }
    
}
