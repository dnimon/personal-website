import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';

const routes: Routes = [
  { path: 'portfolio', component: ProjectsComponent, data: {title: 'David Nimon - Portfolio' } },
  { path: 'resume', component: ResumeComponent, data: {title: 'David Nimon - Resume' } },
  { path: '**', component: LandingComponent, data: {title: 'David Nimon' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
