import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

	
const STORAGE_KEY_1 = 'favouriteEpisodes';
const STORAGE_KEY_2 = 'favouriteCharacters';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private storage: Storage) { }
 
  getAllFavouriteEpisodes() {
    return this.storage.get(STORAGE_KEY_1);
  }

  isFavourite(episodeId) {
    return this.getAllFavouriteEpisodes().then(result => {
      return result && result.indexOf(episodeId) !== -1;
    });
  }
  favouriteEpisode(episodeId) {
    return this.getAllFavouriteEpisodes().then(result => {
      if (result) {
        result.push(episodeId);
        return this.storage.set(STORAGE_KEY_1, result);
      } else {
        return this.storage.set(STORAGE_KEY_1, [episodeId]);
      }
    });
  }
  unfavouriteEpisode(episodeId) {
    return this.getAllFavouriteEpisodes().then(result => {
      if (result) {
        var index = result.indexOf(episodeId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY_1, result);
      }
    });
  }
  getAllFavouriteCharacters() {
    return this.storage.get(STORAGE_KEY_2);
  }

  isFavouriteC(characterId) {
    return this.getAllFavouriteCharacters().then(result => {
      return result && result.indexOf(characterId) !== -1;
    });
  }
  favouriteCharacter(characterId) {
    return this.getAllFavouriteCharacters().then(result => {
      if (result) {
        result.push(characterId);
        return this.storage.set(STORAGE_KEY_2, result);
      } else {
        return this.storage.set(STORAGE_KEY_2, [characterId]);
      }
    });
  }
  unfavouriteCharacter(characterId) {
    return this.getAllFavouriteCharacters().then(result => {
      if (result) {
        var index = result.indexOf(characterId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY_2, result);
      }
    });
  }
}
