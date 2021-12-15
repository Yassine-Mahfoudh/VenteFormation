
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formationcard',
  templateUrl: './formationcard.component.html',
  styleUrls: ['./formationcard.component.css']
})
export class FormationcardComponent implements OnInit {
  formations!: Formation[];
  addformation = <HTMLElement>document.getElementById("add-formation-form");


  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.getFormations();
  }
  public getFormations(): void {
    this.formationService.getFormations().subscribe(
      (response: Formation[]) => {
        this.formations = response;
        console.log(this.formations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onAddFormation(addForm: NgForm): void {
  this.addformation.click();
    this.formationService.addFormation(addForm.value).subscribe(
      (response: Formation) => {
        console.log(response);
        this.getFormations();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
 
}


