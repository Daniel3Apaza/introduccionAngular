import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  correo = "";
  fechaNacimiento = "";
  edad = "";

  @Output() personaEmit = new EventEmitter<{ correo: string; fechaNacimiento: string; edad: string }>();

  guardar(){
    this.personaEmit.emit({
      correo: this.correo,
      fechaNacimiento: this.fechaNacimiento,
      edad: this.edad,
    });
  }

}