import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-registro',
  templateUrl: './card-registro.component.html',
  styleUrls: ['./card-registro.component.scss']
})
export class CardRegistroComponent implements OnInit {

  @Input() public titulo!: string;
  @Input() public icone!: string;
  @Input() public cor!: string;
  @Input() public status!: string;
  @Input() public periodo!: string;
  @Input() public horario!: string;
  @Input() public historico!: any;

  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
