import { Component } from '@angular/core';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { Project } from '../projects.interface';
import { ProjectsListComponent } from '../projects-list/projects-list.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgOptimizedImage, NgFor, ProjectsListComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})

export class BodyComponent {
  resume: any = "/files/MasonClarkResume.pdf"
}