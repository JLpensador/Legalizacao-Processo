import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-card-processos',
  templateUrl: './card-processos.component.html',
  styleUrl: './card-processos.component.scss',
})
export class CardProcessosComponent implements OnInit {
  projects: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
