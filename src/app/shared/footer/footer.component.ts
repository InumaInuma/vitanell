import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  public phone = "+51936104581"
  public title = "Hola deseo informacion de los productos de vitanell";

  ngOnInit(): void {
  }

}
