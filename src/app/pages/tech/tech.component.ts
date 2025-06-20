import { Component, OnInit } from '@angular/core';
import Data from '../../../assets/tech.json';

interface TechnologyCategory {
  title: string;
  description?: string;
  items: Technology[]
}

interface Technology {
  title: string;
  subtitle?: string;
  description?: string;
  points?: string[];
}

@Component({
    selector: 'app-tech',
    templateUrl: './tech.component.html',
    styleUrls: ['./tech.component.css'],
    standalone: false
})
export class TechComponent implements OnInit {

  Technologies: TechnologyCategory[] = Data;

  constructor() { }

  ngOnInit(): void {}

}
