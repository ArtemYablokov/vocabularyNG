import { Injectable } from '@angular/core';
import { Word } from '../app.component';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BackendHttpService {

  constructor(private http: HttpClient) { }


  getWordsfromServer(prefix: string): Word[] {

    // todo 05 08 2022 NEED a cash for searches Map<Prefix -> Arrays of WORDs>
    // and it should be LRU with limit on memory (about 5MB)
    // and lets use redis
    
    var result: Word[] = []

    this.http.get<string[]>('http://localhost:8080/find', { params: new HttpParams().set("prefix", prefix) })
      .subscribe(response => {
        console.log(response)
        if (response) {
          response.forEach(str => { result.push({ name: prefix, definition: str }) })
        }
      })

    return result
  }
}
