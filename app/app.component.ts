import {Component} from 'angular2/core';

export class Hero {
  id: number;
  name: string;
}

var HEROES: Hero[] = [
  { "id": 101, "name": "Edward Snowden" }
  , { "id": 102, "name": "Amazingly Awesome" }
  , { "id": 103, "name": "This Developer\'s Life" }
  , { "id": 104, "name": "Alex Bloomberg" }
  , { "id": 105, "name": "Scott Guthrie" }
  , { "id": 106, "name": "Mama Dayo" }
  , { "id": 107, "name": "Dr. Banjo" }
  , { "id": 108, "name": "Mrs. M. Banjo" }
  , { "id": 109, "name": "Stephen Dubner" }
  , { "id": 110, "name": "Deep Throat" }
]

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>

    <h2>My Heroes</h2>
    <ul>
      <li *ngFor="#hero of heroes">
        <span class"badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <h2>{{hero.name}} details!</h2>
    <div>
      <label>id:</label> {{hero.id}}
    </div>
    <div>
      <label>name:</label> {{hero.name}}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `,

  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
  public title = 'Tour of Heroes'
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  public heroes = HEROES;
}
