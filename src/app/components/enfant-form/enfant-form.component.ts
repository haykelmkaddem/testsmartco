import { Component } from '@angular/core';
import { JohnService } from 'src/app/services/johnServices/john.service';

@Component({
  selector: 'app-enfant-form',
  templateUrl: './enfant-form.component.html',
  styleUrls: ['./enfant-form.component.scss'],
})
export class EnfantFormComponent {
  nom = '';
  prenom = '';
  dateDeNaissance = '';

  options = ['M', 'F', 'N'];
  selectedGender = '';

  constructor(public johnService: JohnService) {
    this.johnService.getOneChild().subscribe((data: any) => {
      this.nom = data.last_name;
      this.prenom = data.first_name;
      this.dateDeNaissance = data.birthday;
      this.selectedGender = data.gender;
    });
  }

  ngOnInit(): void {}

  patchChild() {
    const child = {
      parent: null,
      last_name: this.nom,
      first_name: this.prenom,
      birthday: this.dateDeNaissance,
      gender: this.selectedGender,
    };
    this.johnService.patchChild(child).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => console.log(err)
    );
  }
}
