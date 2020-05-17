import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { FavouriteService } from './../../services/favourite.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: any;
    characterId = null;
    isFavouriteC = false;

constructor(private activatedRoute: ActivatedRoute,private api: ApiService,
    private favouriteService: FavouriteService) { }
    
    ngOnInit() {
      this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
      this.api.getCharacter(this.characterId).subscribe(res => {
      this.character = res[0];
    });
    this.favouriteService.isFavourite(this.characterId).then(isFav => {
      this.isFavouriteC = isFav;
    });
  }

 favouriteCharacter() {
    this.favouriteService.favouriteCharacter(this.characterId).then(() => {
      this.isFavouriteC = true;
    });
  }
 
  unfavouriteCharacter() {
    this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
      this.isFavouriteC = false;
    });
  }

}
