import { Component } from '@angular/core';
import { ConectionService } from './service/conection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qrAngular';

  constructor(private conect:ConectionService){}

  obtenerValor(valor: string) {
    console.log(valor);
    this.conect.conection(valor).subscribe(data => {
      console.log(data)
    })
  }
}
