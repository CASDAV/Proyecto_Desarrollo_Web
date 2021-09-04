import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-noencontrada',
  templateUrl: './noencontrada.component.html',
  styleUrls: ['./noencontrada.component.css']
})
export class NoencontradaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
