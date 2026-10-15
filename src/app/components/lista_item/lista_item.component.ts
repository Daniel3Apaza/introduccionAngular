import { Component, OnInit } from '@angular/core';

interface Persona {
  correo: string;
  fechaNacimiento: string;
  edad: number;
}

@Component({
  selector: 'app-lista_item',
  templateUrl: './lista_item.component.html',
  styleUrls: ['./lista_item.component.css']
})
export class Lista_itemComponent {
  personas: Persona[] = [
    { correo: 'juan@example.com', fechaNacimiento: '1990-05-20', edad: 33 },
    { correo: 'maria@example.com', fechaNacimiento: '1985-12-01', edad: 38 },
    { correo: 'lucas@example.com', fechaNacimiento: '2000-08-15', edad: 23 }
  ];

}
