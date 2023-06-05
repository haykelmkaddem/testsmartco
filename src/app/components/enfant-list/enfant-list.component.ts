import { Component } from '@angular/core';
import { JohnService } from 'src/app/services/johnServices/john.service';

@Component({
  selector: 'app-enfant-list',
  templateUrl: './enfant-list.component.html',
  styleUrls: ['./enfant-list.component.scss'],
})
export class EnfantListComponent {
  childsList: any = [];
  constructor(public johnService: JohnService) {
    this.johnService.getChilds().subscribe((data: any) => {
      this.childsList = data;
    });
  }
}
