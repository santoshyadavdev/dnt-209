import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'dnt-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  loaded: number = 0;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getPhotos().subscribe((res) => {
      switch (res.type) {
        case HttpEventType.Sent: {
          console.log('request is sent');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log(res);
          break;
        }
        case HttpEventType.DownloadProgress: {
          console.log(res.type);
          this.loaded += res.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(res.body);
          break;
        }
      }
    })
  }

}
