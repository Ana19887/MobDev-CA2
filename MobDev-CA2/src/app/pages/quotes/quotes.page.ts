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
    author ="";
    constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
      this.loadQuotes();
  }

  // function to load all quotes
  loadQuotes(){
      this.api.getQuotes().subscribe( res => {
          this.quotes=res;
    });
  }

  //function to search an author and list all quotes from him
  searchItem(event){
      this.author = event.detail.value;
      if (this.author ==""){
          this.loadQuotes();
          return;
      }
      this.api.getAuthor(this.author).subscribe(res=> {
          this.quotes = res;
        },err =>{
            this.quotes = [] 
      });
  }

  //function to open the details of quotes
   openDetails(quote) {
    let quoteId = quote.quote_id;
    this.router.navigateByUrl(`/tabs/quotes/${quoteId}`);
  }
  
}
 
  
 


  

