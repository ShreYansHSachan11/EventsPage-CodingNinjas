import { Component } from '@angular/core';
import  {TagsService} from './services/tags.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event';
  tagList:any;
  constructor(private tagItems:TagsService )
  {
    tagItems.tagList().subscribe((data)=>{
      console.warn(data);
      this.tagList=data
    });
   
  }
}
