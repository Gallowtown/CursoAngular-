import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-calc',
  templateUrl: './formulario-calc.component.html',
  styleUrls: ['./formulario-calc.component.css']
})
export class FormularioCalcComponent implements OnInit {

  operandoA: number;
  operandoB: number;

  @Output() resultadoSuma = new EventEmitter<number>();

  sumar():void{
     let resultado = this.operandoA + this.operandoB;
     this.resultadoSuma.emit(resultado)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
