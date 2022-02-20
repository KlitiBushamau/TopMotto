import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deils',
  templateUrl: './deils.component.html',
  styleUrls: ['./deils.component.css']
})
export class DeilsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
}
