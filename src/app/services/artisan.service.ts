// src/app/services/artisan.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artisan} from "../artisan/artisan.model";

@Injectable({
  providedIn: 'root',
})
export class ArtisanService {
  constructor() {}

  getArtisans(): Observable<Artisan[]> {
    const artisans: Artisan[] = [
      { id: 1, name: 'Artisan 1', craft: 'Craft 1', description: 'Description 1', imageUrl: 'url1' },
      { id: 2, name: 'Artisan 2', craft: 'Craft 2', description: 'Description 2', imageUrl: 'url2' },
      // Add more mock artisans as needed
    ];
    return of(artisans);
  }
}
