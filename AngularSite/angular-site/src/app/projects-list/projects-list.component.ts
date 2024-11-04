import { Component, OnInit } from '@angular/core'
import { ProjectService } from '../projects.service'
import { Project } from '../projects.interface'
import { NgFor, NgIf } from '@angular/common'

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent implements OnInit {
  projects: Project[] = []
  curProject = "This Website!"
  constructor(private projectService: ProjectService){}

  changeProject = (project: any) => {
    this.curProject = project
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects)=>{
      var objectProjects = Object(projects)
      var keys = Object.keys(objectProjects)
      var counter: number = 0
      for (const key of keys){
        if(counter == 0){
          this.curProject = objectProjects[key].name
        }
        this.projects[counter] = objectProjects[key]
        counter += 1
      }
    })
  }
}