import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  empresa = 'SOTECH Soluções e Tecnologia';

  constructor() { }

  ngOnInit() {
  }

}
