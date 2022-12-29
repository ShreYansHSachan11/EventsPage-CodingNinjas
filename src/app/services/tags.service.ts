import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http:HttpClient) { }
  tagList()
  {
    return this.http.get('https://api.codingninjas.com/api/v3/event_tags')
  }
}
