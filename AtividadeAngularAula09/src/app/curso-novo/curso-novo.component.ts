import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso-novo',
  templateUrl: './curso-novo.component.html',
  styleUrls: ['./curso-novo.component.css']
})
export class CursoNovoComponent{

  @Input() curso;
  
}
