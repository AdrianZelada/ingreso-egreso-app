import { Pipe, PipeTransform } from '@angular/core';
import { ingresoegreso } from './ingresoEgreso.model';

@Pipe({
  name: 'ordenIngresoEgreso'
})
export class OrdenIngresoEgresoPipe implements PipeTransform {

  transform(ingresoEgreso: ingresoegreso[]): ingresoegreso[]{
    return ingresoEgreso.sort((a,b)=>{
      if(a.type == 'ingreso'){
        return -1;
      }else{
        return 1;
      }
    });    
  }

}
