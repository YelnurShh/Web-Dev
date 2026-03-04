import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
  const id = +this.route.snapshot.paramMap.get('id')!;
  const limit = +this.route.snapshot.queryParamMap.get('limit')! || 10;

  this.albumsService.getPhotosByAlbumId(id).subscribe(data => {
    const limitedPhotos = data.slice(0, limit);
    

    limitedPhotos.forEach(photo => {
      const img = new Image();
      img.src = photo.thumbnailUrl;
    });

    this.photos = limitedPhotos;
  });
}

  goBack(): void {
    this.router.navigate(['/albums', this.route.snapshot.paramMap.get('id')]);
  }
}