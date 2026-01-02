import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { TechComponent } from './pages/tech/tech.component';
import { PatentsComponent } from './pages/patents/patents.component';

const routes: Routes = [
  { path: 'portfolio', component: ProjectsComponent, data: {title: 'David Nimon - Portfolio' } },
  { path: 'resume', component: ResumeComponent, data: {title: 'David Nimon - Resume' } },
  { path: 'technologies', component: TechComponent, data: {title: 'David Nimon - Technologies' } },
  { path: 'patents', component: PatentsComponent, data: {title: 'David Nimon - Patents' } },
  { path: '**', component: HomeComponent, data: {title: 'David Nimon' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
