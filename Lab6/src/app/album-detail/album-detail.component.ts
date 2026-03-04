import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  newTitle: string = '';
  photoLimit: number = 10;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.albumsService.getAlbumById(id).subscribe(data => {
      this.album = data;
      this.newTitle = data.title;
    });
  }

  saveTitle(): void {
    this.albumsService.updateAlbumTitle(this.album.id, this.newTitle).subscribe(() => {
      this.album.title = this.newTitle;
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  viewPhotos(): void {
    this.router.navigate(['/albums', this.album.id, 'photos'], {
      queryParams: { limit: this.photoLimit }
    });
  }
}





























// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AlbumsService } from '../services/albums.service';

// @Component({
//   selector: 'app-album-detail',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './album-detail.component.html',
//   styleUrls: ['./album-detail.component.css']
// })
// export class AlbumDetailComponent implements OnInit {
//   album: any;
//   newTitle: string = '';

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private albumsService: AlbumsService
//   ) { }

//   ngOnInit(): void {
//     const id = +this.route.snapshot.paramMap.get('id')!;
    
//     this.albumsService.getAlbumById(id).subscribe(data => {
//       this.album = data;
//       const updatedTitles = JSON.parse(localStorage.getItem('updatedAlbumTitles') || '{}');
      
//       if (updatedTitles[id]) {
//         this.album.title = updatedTitles[id];
//       }
      
//       this.newTitle = this.album.title;
//     });
//   }

//   saveTitle(): void {
//     this.albumsService.updateAlbumTitle(this.album.id, this.newTitle).subscribe(() => {
//       this.album.title = this.newTitle;
//       const updatedTitles = JSON.parse(localStorage.getItem('updatedAlbumTitles') || '{}');
//       updatedTitles[this.album.id] = this.newTitle;
//       localStorage.setItem('updatedAlbumTitles', JSON.stringify(updatedTitles));
//     });
//   }

//   goBack(): void {
//     this.router.navigate(['/albums']);
//   }

//   viewPhotos(): void {
//     this.router.navigate(['/albums', this.album.id, 'photos']);
//   }
// }