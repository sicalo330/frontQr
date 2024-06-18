import { Component } from '@angular/core';
import { ConectionService } from './service/conection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading:boolean = false
  title = 'qrAngular';

  constructor(private conect:ConectionService){}

  obtenerValor(valor: string) {
    this.loading = true
    this.conect.conection(valor).subscribe(data => { 
      if(data == 'ok'){
        this.loading = false  
      }
      console.log(this.loading)
    })
  }
}
