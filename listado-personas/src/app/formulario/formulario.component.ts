import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../persona.models';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string;
  apellidoInput:string;

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personaCreada.emit(persona1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
