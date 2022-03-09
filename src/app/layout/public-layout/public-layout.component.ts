import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {
  public logo: string = '../../assets/logo.svg';

  constructor() {
  }

  ngOnInit(): void {
  }

}
