import { Component, OnInit } from '@angular/core';
import LandingData from '../../../assets/landing.json';

interface LandingType {
  coverLetter: object;
  technologies: TechnologyType[]
}

interface TechnologyType {
  title: string;
  items: Technology[]
}

interface Technology {
  title: string;
  subtitle?: string;
  photo?: string;
  photoAlt?: string;
  noPhoto?: boolean;
  description?: string;
  points?: string[]
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  Landing: any = LandingData;

  constructor() { }

  ngOnInit(): void {
    console.log("!!", LandingData)
  }

}
