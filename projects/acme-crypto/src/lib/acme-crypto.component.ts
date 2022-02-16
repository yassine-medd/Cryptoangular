import { Component } from '@angular/core';
import {AcmeCryptoXor} from './acme-crypto.xor'
import {AcmeCryptoRot13} from './acme-crypto.rot13'
import {AcmeCryptoZmap} from './acme-crypto.zmap'
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'lib-acme-crypto',
  templateUrl: './acme-crypto.component.html',
  styleUrls: ['./acme-crypto.component.css']
 
})
export class AcmeCryptoComponent  {

  values: any='Crypto';
  key: any='Crypto';

  valcrypto :any='';
  c = new AcmeCryptoXor();
  acmeCryptoRot13 = new AcmeCryptoRot13();
  acmeCryptoZmap = new AcmeCryptoZmap();
  typeCrypto: string='';


  OnKey(event: any) { 
     
    this.key = event.target.value;
  }
  OnValue(event: any){
    
    this.values = event.target.value ;
  }
  public crypt<T = any>(value: T | undefined,typeCrypto:string): string {
    if(value != undefined)
     {
      this.typeCrypto=typeCrypto;
      this.values=  value;
      this.Crypto()
     }
     else return ''

    return  this.valcrypto
  }
  public decrypt<T = any>(typeCrypto:string,value?: string): T {
     this.typeCrypto=typeCrypto;
      this.values=  value;
      this.DeCrypto();
      return this.valcrypto;
  }
  Crypto(){
  
      if(this.values.length>0)
        switch (this.typeCrypto) {
          case 'XOR':
            let array = this.c.CryptoXOR(this.values,this.key);
            this.valcrypto='';
            if(this.values.length>0 && this.key.length>0)
              for (let index = 0; index < array.length; index++) {
                this.valcrypto  += array[index] + " ";        
              }
            break;
          case 'ROT13':
            this.valcrypto=this.acmeCryptoRot13.EncryptorDecryptorROT13(this.values);
            break;
          case 'Zmap': 
            this.valcrypto= this.acmeCryptoZmap.DeCryptoOrCryptoZmap(this.values, true);
            break;
          default:
            console.log(`Sorry check type crypto!!`,this.typeCrypto);
            }

  }

  DeCrypto(){

    if(this.values.length>0)
        switch (this.typeCrypto) {
          case 'XOR':
            let array = this.c.DeCryptoXOR(this.ConvertStringTotableBinare(this.values),this.key);
            this.valcrypto= this.c.ConvertBinarieToString(array);
            break;
          case 'ROT13':
            this.valcrypto=this.acmeCryptoRot13.EncryptorDecryptorROT13(this.values);
            break;
          case 'Zmap': 
          this.valcrypto= this.acmeCryptoZmap.DeCryptoOrCryptoZmap(this.values, false);
            break;
          default:
            console.log(`Sorry check type crypto!!`);
            }
   
   
  }

  ConvertStringTotableBinare(dataString : string): any[]{
    let Resultat: any[]=[];
    let str: string='';
    
    for (let i = 0; i < dataString.length; i++) {
      if(dataString[i] == ' ')
      {
        Resultat.push(str);
        str='';
        i=i+1;
      }
             
        str += dataString[i];      
            
     }
    
    return Resultat;
}
}
