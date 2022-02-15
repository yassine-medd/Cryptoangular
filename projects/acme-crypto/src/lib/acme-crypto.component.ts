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

  values: string='Crypto';
  key: string='Crypto';

  valcrypto :string='';
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
  Crypto(){

    if(this.typeCrypto == "XOR")
     {
      let array = this.c.CryptoXOR(this.values,this.key);
      console.log('V2',array);
      this.valcrypto='';
      if(this.values.length>0 && this.key.length>0)
        for (let index = 0; index < array.length; index++) {
          this.valcrypto  += array[index] + " ";
          
        }
     }else 
     {  
       if(this.typeCrypto == "ROT13")
           this.valcrypto=this.acmeCryptoRot13.EncryptorDecryptorROT13(this.values);
       else
       this.valcrypto= this.acmeCryptoZmap.DeCryptoOrCryptoZmap(this.values, true);
     }

  }

  DeCrypto(){
   
    if(this.typeCrypto == 'XOR')
    {
      let array = this.c.DeCryptoXOR(this.ConvertStringTotableBinare(this.values),this.key);
      console.log(" valeur decrypté",array)
      this.valcrypto= this.c.ConvertBinarieToString(array);
     
      console.log('finale vale',this.valcrypto);
    }else{  
      if(this.typeCrypto == "ROT13")
          this.valcrypto=this.acmeCryptoRot13.EncryptorDecryptorROT13(this.values);
      else
         this.valcrypto= this.acmeCryptoZmap.DeCryptoOrCryptoZmap(this.values, false);
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
