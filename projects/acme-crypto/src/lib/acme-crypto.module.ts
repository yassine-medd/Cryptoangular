import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AcmeCryptoComponent } from './acme-crypto.component';
import { AcmeCryptoRot13 } from './acme-crypto.rot13';
import { AcmeCryptoXor } from './acme-crypto.xor';
import { AcmeCryptoZmap } from './acme-crypto.zmap';




@NgModule({
  declarations: [
    AcmeCryptoComponent,
    AcmeCryptoXor,
    AcmeCryptoRot13,
    AcmeCryptoZmap
  ],
  imports: [FormsModule,CommonModule
  ],
  exports: [
    AcmeCryptoComponent,
    AcmeCryptoXor,
    AcmeCryptoRot13,
    AcmeCryptoZmap

  ]
})
export class AcmeCryptoModule { }
