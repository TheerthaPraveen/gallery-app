import { Component, OnInit } from '@angular/core';
import {  ApiService } from '../api..service';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.css']
})
export class GalleryViewComponent implements OnInit {

  constructor(private api:ApiService ) {

api.viewGallery().subscribe(

(response)=>{
  this.data=response
}

)






   }

  ngOnInit(): void {
  }

data:any=[  ]







}
