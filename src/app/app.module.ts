import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './elements/header/header.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card'; 
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import { ResumeComponent } from './pages/resume/resume.component'; 
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { TechComponent } from './pages/tech/tech.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    TechComponent,
    ResumeComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    PdfJsViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
