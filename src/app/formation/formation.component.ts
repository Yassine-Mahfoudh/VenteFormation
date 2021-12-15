import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formation } from './formation';
import { FormationService } from './formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit{
  public formations!: Formation[];
  public editFormation!: Formation;
  public deleteFormation!: Formation;

  constructor(private formationService: FormationService){}

  ngOnInit() {
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
    document.getElementById('add-formation-form').click();
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

  public onUpdateFormation(formation: Formation): void {
    this.formationService.updateFormation(formation).subscribe(
      (response: Formation) => {
        console.log(response);
        this.getFormations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteFormation(formationId: number): void {
    this.formationService.deleteFormation(formationId).subscribe(
      (response: void) => {
        console.log(response);
        this.getFormations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchFormation(key: string): void {
    console.log(key);
    const results: Formation[] = [];
    for (const formation of this.formations) {
      if (formation.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || formation.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || formation.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
       ) {
        results.push(formation);
      }
    }
    this.formations = results;
    if (results.length === 0 || !key) {
      this.getFormations();
    }
  }

  public onOpenModal(formation: Formation, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addFormationModal');
    }
    if (mode === 'edit') {
      this.editFormation = formation;
      button.setAttribute('data-target', '#updateFormationModal');
    }
    if (mode === 'delete') {
      this.deleteFormation = formation;
      button.setAttribute('data-target', '#deleteFormationModal');
    }

    
    container.appendChild(button);
    button.click();
  }



}
