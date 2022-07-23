import { Component, OnInit } from '@angular/core';
import ProjectsData from '../../../assets/projects.json';

interface ProjectType {
  title: string;
  items: Project[]
}

interface Project {
  title: string;
  subtitle: string;
  photo?: string;
  photoAlt?: string;
  noPhoto?: boolean;
  description: string;
  points: string[]
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  Portfolio: ProjectType[] = ProjectsData;

  constructor() { }

  ngOnInit(): void { }

}
