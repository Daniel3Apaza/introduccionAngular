import { Component,OnChanges,OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introduccionAngular';
  //descripcion = signal('materia');
  titulo: string = 'materia de aplicaciones';

  
}
