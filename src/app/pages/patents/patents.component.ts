import { Component, OnInit } from '@angular/core';
import PatentsData from '../../../assets/patents.json';

interface ProjectType {
  title: string;
  items: Project[]
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
}

@Component({
  selector: 'app-patents',
  templateUrl: './patents.component.html',
  styleUrls: ['./patents.component.css']
})
export class PatentsComponent implements OnInit {

  Patents: ProjectType[] = PatentsData;

  constructor() { }

  ngOnInit(): void {
  }

}
