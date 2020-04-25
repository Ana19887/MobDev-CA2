import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    quotes: any;
    
    constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
      this.quotes = this.api.getQuotes()
  }
  
  getItems(event){
     this.quotes = this.api.getQuotes()
  

  let val = event.target.value;

  if (val && val.trim()!= ""){
      this.quotes = this.quotes.filter((item) =>{
        return(item.author.toLowerCase().indexOf(val.toLowerCase())> -1);
      })
  }
 
  }  
  
}
