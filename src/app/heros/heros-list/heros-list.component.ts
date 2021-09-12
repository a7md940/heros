import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../models';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.scss']
})
export class HerosListComponent implements OnInit {
  sortFieldFormControl = new FormControl(null);
  searchFormControl = new FormControl(null);

  headers = ['Hero Name', 'Powers', 'Rate'];

  heros = [
    Hero.factory.build({ name: 'Ahmed Radwan', powers: 'Angular, Nodejs, Nestjs, K8s, Docker and azure.', rate: 7.8 }),
    Hero.factory.build({ name: 'mahmoud saeed', powers: 'Angular, Nodejs, Nestjs, K8s, Docker and azure.', rate: 7.8 }),
    Hero.factory.build({ name: 'Ahmed Samir', powers: 'Angular, Nodejs, Nestjs, K8s, Docker and azure.', rate: 7.8 }),
    Hero.factory.build({ name: 'Mohammed Abdel-hakiem', powers: 'Angular, Nodejs, Nestjs, K8s, Docker and azure.', rate: 7.8 }),
  ];
  clonedHeros = this.heros;

  constructor() { }

  ngOnInit(): void {
    this.sortFieldFormControl.valueChanges.subscribe(console.log);
    this.searchFormControl.valueChanges.subscribe(this.filterHeros.bind(this));
  }

  filterHeros(searchTerm: string): void {
    if (searchTerm != null) {
      this.heros = this.clonedHeros.filter((x) => x.name.includes(searchTerm));
    } else {
      this.heros = this.clonedHeros;
    }
  }
}
