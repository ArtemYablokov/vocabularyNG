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

    this.http.get<Word[]>(url, {params: new HttpParams().set("prefix", prefix)})
      .subscribe(response => {
        if (response) {

          // todo WHY can't assign directly response to array ???
          // result = response
          response.forEach(str => {
            result.push(str)
          })
        }
      })

    return result
  }

  addNewWord(word: Word): string {
    let result: any = ''
    this.http.put('http://localhost:8080/new', word)
      .subscribe(
        response => {
          console.log(response)

          // result = response
        })
    return result
  }
}
