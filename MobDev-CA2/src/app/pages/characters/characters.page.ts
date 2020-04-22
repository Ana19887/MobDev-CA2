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
    characters: Observable<any>;

  @ViewChild(IonInfiniteScroll,null) infinite: IonInfiniteScroll;

    constructor(private router: Router, private api: ApiService) { }

   ngOnInit() {
        this.characters = this.api.getCharacters();
  }

    
  openDetails(character) {
    let characterId = character.char_id;
    this.router.navigateByUrl(`/tabs/characters/${characterId}`);
  }

}
