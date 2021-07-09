import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-opisi-vjezbi',
  templateUrl: './opisi-vjezbi.component.html',
  styleUrls: ['./opisi-vjezbi.component.scss']
})
export class OpisiVjezbiComponent implements OnInit {

  @Input() opis: string;

  constructor() { }

  ngOnInit(): void {
  }

}
