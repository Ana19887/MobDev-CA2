import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    deaths: any;
    offset = 0;
    
constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
       this.deaths = this.api.getDeaths();
  }
onSearchChange(e) {
    let value = e.detail.value;
 
    if (value == '') {
      this.offset = 0;
      this.api.getDeaths();
      return;
    }
 
    this.api.getDeath(value).subscribe(res => {
      this.deaths = [res];
    }, err => {
      this.deaths = [];
    });
 
}    
      
}