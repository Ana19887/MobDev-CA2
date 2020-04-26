import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  
 
  getEpisodes() {
    return this.http.get('https://breakingbadapi.com/api/episodes');
  }
 
  getEpisode(id) {
    return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`);
  }

  getCharacters(offset) {
    return this.http.get(`https://breakingbadapi.com/api/characters?limit=10&offset=${offset}`);
    }
    
  getCharacter(id) {
    return this.http.get(`https://breakingbadapi.com/api/characters/${id}`);
  }
  

  getQuotes() {
    return this.http.get('https://breakingbadapi.com/api/quotes');
  }
  
  getQuote(id) {
    return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`);
  }

  getAuthor(author) {
    return this.http.get(`https://breakingbadapi.com/api/quote?author=${encodeURI(author)}`);
   }

   getDeath(search) {
    return this.http.get(`https://breakingbadapi.com/api/death-count?name=${encodeURI(search)}`);
   }
  
   }
