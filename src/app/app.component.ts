import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'vocabulary'

  result: Word[] = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.result = this.words.filter(word => word.name === 'word')
  }

  handleInputChange(text: string) {
    console.log('from parent = ' + text)

    this.result = this.words.filter(word => word.name === text)

    this.http.get('http://localhost:8080/health').subscribe(response => { console.log(response) })


  }

  words: Word[] = [
    { name: 'word', definition: 'indivisible part of sentence', searches: 9 },
    { name: 'w', definition: 'n-th letter of english alphabet', searches: 4 },
  ]


  // items: Item[] = [
  //   { id: 0, name: 'Teapot', feature: 'stout' }, { id: 1, name: 'Teapot1', feature: 'stout' }, { id: 2, name: 'Teapot2', feature: 'stout' }
  // ];

  // posts: Post[] = [
  //   { title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу компоненты', id: 1 },
  //   { title: 'Следующий блок', text: 'Будет про директивы и еще про пайпы', id: 2 },
  //   { title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу компоненты', id: 3 },

  // ]

}

export interface Word {
  name: string,
  definition: string,
  searches: number
}

// export interface Post {
//   title: string
//   text: string
//   id?: number
// }

// export interface Item {

//   id: number,
//   name: string,
//   feature?: string
// }


// export class Item {  

//   constructor(
//     public id: number,
//     public name: string,
//     public feature?: string,
//     public url?: string,
//     public rate = 100,
//     ) {}

// }


  // items = [
  //   'Apple iPhone 7',
  //   'Huawei Mate 9',
  //   'Samsung Galaxy S7',
  //   'Motorola Moto Z',
  // ]