import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AcmeCryptoComponent } from './acme-crypto.component';
import { AcmeCryptoRot13 } from './acme-crypto.rot13';
import { AcmeCryptoXor } from './acme-crypto.xor';




@NgModule({
  declarations: [
    AcmeCryptoComponent,
    AcmeCryptoXor,
    AcmeCryptoRot13
  ],
  imports: [FormsModule,CommonModule
  ],
  exports: [
    AcmeCryptoComponent,
    AcmeCryptoXor,
    AcmeCryptoRot13

  ]
})
export class AcmeCryptoModule { }
