import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formation } from './formation';
import { FormationService } from './formation.service';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public formations!: Formation[];
  public users!: User[];
    
    addformation = <HTMLElement>document.getElementById("add-formation-form");
  
  
    constructor(private formationService: FormationService,private userService:UserService ) { }
  
    ngOnInit(): void {
      this.getFormations();
      this.getUsers();

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

    public getUsers(): void {
      this.userService.getUsers().subscribe(
        (response: User[]) => {
          this.users = response;
          console.log(this.users);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    public onUpdateUser(user: User): void {
      this.userService.updateUser(user).subscribe(
        (response: User) => {
          console.log(response);
          this.getUsers();
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
  
    /*public searchFormations(key: string): void {
      console.log(key);
      const results: Formation[] = [];
      for (const formation of this.formations) {
        if (formation.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || formation.type.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || formation.duf.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || formation.prix.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
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
      container.appendChild(button);
      button.click();
    }*/
  }

