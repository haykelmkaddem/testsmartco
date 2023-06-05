import { Component } from '@angular/core';
import { JohnService } from 'src/app/services/johnServices/john.service';

@Component({
  selector: 'app-profil-form',
  templateUrl: './profil-form.component.html',
  styleUrls: ['./profil-form.component.scss'],
})
export class ProfilFormComponent {
  nom = '';
  prenom = '';
  email = '';
  dateDeNaissance = '';
  telephone = '';

  options = ['M', 'F'];
  selectedGenre = '';

  constructor(public johnService: JohnService) {
    this.johnService.getJohnProfile().subscribe((data: any) => {
      this.nom = data.last_name;
      this.prenom = data.first_name;
      this.email = data.email;
      this.dateDeNaissance = data.birthday;
      this.selectedGenre = data.gender;
    });
  }
  ngOnInit(): void {}

  updateJohn() {
    const john = {
      username: 'john',
      last_name: this.nom,
      first_name: this.prenom,
      email: this.email,
      birthday: this.dateDeNaissance,
      gender: this.selectedGenre,
    };
    this.johnService.updateJohn(john).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => console.log(err)
    );
  }
}
