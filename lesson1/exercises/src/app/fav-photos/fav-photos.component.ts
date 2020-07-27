import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos';
  image1 = 'https://pixel.nymag.com/imgs/daily/vulture/2015/03/23/24-buscemi.o.jpg/a_190x190.w1200.h630.jpg';
  image2 = 'https://content8.flixster.com/site/10/25/61/10256134_ori.jpg';
  image3 = 'https://tvguide1.cbsistatic.com/mediabin/showcards/celebs/s-u/thumbs/steve-buscemi_sc_140x187.png';

  constructor() { }

  ngOnInit() {
  }

}