import { Component,OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
    offset = 0;
    characters=[];
   
    constructor(private router: Router, private api: ApiService) { 
        
    }

   ngOnInit() {
      this.loadCharacters();

        }

  //function to load the page  with 10 characters    
  loadCharacters(event?){
    this.api.getCharacters(this.offset).subscribe(res =>{
         
         this.characters = this.characters.concat(res);
        
         if (event){
             event.target.complete();
         }
     })
  }
//function to load more characters
  loadMore(){
      console.log(event);
      this.offset+=10;
      this.loadCharacters(event);

     
      }
  
    
  openDetails(character) {
    let characterId = character.char_id;
    this.router.navigateByUrl(`/tabs/characters/${characterId}`);
  }

}
