import { Component } from '@angular/core';
import { AcmeCryptoComponent } from 'acme-crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string ='cryptoapp'
  // a = new AcmeCryptoComponent ();
 
  // test()
  // {
  //   console.log(this.a.crypt('Yassine','Zmap'));
  //   console.log(this.a.decrypt('Zmap',this.a.crypt('Yassine','Zmap')));
  // }
}
