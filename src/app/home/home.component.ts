
import { Component, OnInit } from '@angular/core';
import { ArtisanService } from '../services/artisan.service';
import {Artisan} from "../artisan/artisan.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  artisans: Artisan[] = [];

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe((artisans) => {
      this.artisans = artisans;
    });
  }
}
