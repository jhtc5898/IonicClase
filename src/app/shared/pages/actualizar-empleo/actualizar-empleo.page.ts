import { Component, OnInit } from '@angular/core';
import { Empleo } from '../../model/empleo';
import { EmpleosService } from '../../services/empleos.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { exitCode } from 'process';

@Component({
  selector: 'app-actualizar-empleo',
  templateUrl: './actualizar-empleo.page.html',
  styleUrls: ['./actualizar-empleo.page.scss'],
})
export class ActualizarEmpleoPage implements OnInit {

  empleo: Observable<any>
  actEmpleo:Empleo =new Empleo()
  constructor(private empleosService: EmpleosService ,
  private route:ActivatedRoute){}
  ngOnInit() 
  {
  const id = this.route.snapshot.paramMap.get("id")
  this.empleo= this.empleosService.getEmpleo(id)
  this.empleo.subscribe(data =>
    {
     console.log(data.uid) 
     this.empleo=data
     this.actEmpleo.uid =data.uid
    })
  }
  actualizarservices()
  {
    //console.log("Titulo actualizado:"+this.actEmpleo.uid+this.actEmpleo.titulo+this.actEmpleo.descripcion+this.actEmpleo.salario)
    this.empleosService.actualizarEmpleo(this.actEmpleo)
  }
}
