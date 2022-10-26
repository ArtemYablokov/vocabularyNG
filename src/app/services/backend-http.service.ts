import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Word} from "../model/Word";


@Injectable({
  providedIn: 'root'
})
export class BackendHttpService {

  constructor(private http: HttpClient) {
  }


  getWordsFromServer(prefix: string): Word[] {

    // todo 05 08 2022 NEED a cash for searches Map<Prefix -> Arrays of WORDs>
    // and it should be LRU with limit on memory (about 5MB)
    // and lets use redis

    let result: Word[] = []

    const url = 'http://localhost:8080/find';

    this.http.get<string[]>(url, {params: new HttpParams().set("prefix", prefix)})
      .subscribe(response => {
        console.log(response)
        if (response) {
          response.forEach(str => {
            result.push({name: prefix, definition: str})
          })
        }
      })

    return result
  }
}
