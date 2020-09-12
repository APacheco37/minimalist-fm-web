import { Component, OnInit } from '@angular/core';

import { Position } from '../player';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  positionOptions: Position;

  constructor() { }

  ngOnInit(): void {
  }

}
