import { Component, OnInit } from '@angular/core';
import { Developer } from '../developers.model';
import { DeveloperService } from 'src/app/core/services/developer.service';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.scss'],
})
export class DeveloperListComponent implements OnInit {
  developers: Developer[] = [];
  filterSkill: string = '';
  constructor(private developerService: DeveloperService) {}

  ngOnInit(): void {
    this.developerService.getDevelopers().subscribe((data) => {
      this.developers = data;
    });
  }
  deleteDev(id: number) {
    this.developerService.deleteDeveloper(id);
  }
}
