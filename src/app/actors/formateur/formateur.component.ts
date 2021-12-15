import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  constructor(@Inject(DOCUMENT ) document) { 
    function modaladd(){
      document.getElementById("card").style.display = "flex";
      document.getElementById("article").style.opacity = "25%";
    }
  }
   
  ngOnInit(): void {
  }

}
