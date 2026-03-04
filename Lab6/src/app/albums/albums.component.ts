import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  isLoading: boolean = true;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert('Деректерді алу мүмкін болмады!');
      }
    });
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}











































// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { AlbumsService } from '../services/albums.service';
// import { Album } from '../models/album.model';

// @Component({
//   selector: 'app-albums',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './albums.component.html',
//   styleUrls: ['./albums.component.css']
// })
// export class AlbumsComponent implements OnInit {
//   albums: Album[] = [];
//   isLoading: boolean = true;
//   deletedIds: number[] = [];

//   constructor(private albumsService: AlbumsService) { }

//   ngOnInit(): void {
//     const savedDeletedIds = localStorage.getItem('deletedAlbumIds');
//     if (savedDeletedIds) {
//       this.deletedIds = JSON.parse(savedDeletedIds);
//     }

//     this.albumsService.getAlbums().subscribe({
//       next: (data) => {
//         this.albums = data.filter(album => !this.deletedIds.includes(album.id));
//         this.isLoading = false;
//       },
//       error: () => {
//         this.isLoading = false;
//         alert('Error!');
//       }
//     });
//   }

//   deleteAlbum(id: number): void {
//     this.albumsService.deleteAlbum(id).subscribe(() => {
//       this.albums = this.albums.filter(album => album.id !== id);
//       this.deletedIds.push(id);
//       localStorage.setItem('deletedAlbumIds', JSON.stringify(this.deletedIds));
//     });
//   }
// }