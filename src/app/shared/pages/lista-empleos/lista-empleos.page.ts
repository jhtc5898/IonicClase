import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../../services/empleos.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleos',
  templateUrl: './lista-empleos.page.html',
  styleUrls: ['./lista-empleos.page.scss'],
})
export class ListaEmpleosPage implements OnInit {

  empleados: Observable<any[]>
  cosas: any = new Array ()
  constructor(private empleosService: EmpleosService, public router:Router) { }

  
 ngOnInit() 
  {
    this.empleados= this.empleosService.getEmpleos()
    this.cosas.push({id:10,nombre:"John"})
  }

  showEmpleo(id:any){
    this.router.navigate([`empleo/${id}`])
  }

  actualizarEmpleo(id:any)
  {
    this.router.navigate([`actualizar-empleo/${id}`])
  }

  trackByFn(index, obj) {
    return obj.uid;
  }
  showCrearEmpleo()
  {
    this.router.navigate(["crear-empleo"])
  }

}
