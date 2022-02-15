import { Component } from '@angular/core';

@Component({
  selector: 'lib-acme-crypto-xor',
  template: `  `,
  styles: [ ]
})
export class AcmeCryptoXor  {

  constructor() { }

 
DeCryptoXOR(valueCrypto:any[], key: string): any[]{
     // un tableau qui va contenir la phrase décryptée
    let valueDeCrypto : any[]=[];
    // un tableau qui contient la clé en binaire
    let keyBinarie :any[]=[];
    
    // equilibreListe :pour que la taille de la clé soit supérieure a la taille la phrase à décrypter.
    keyBinarie=this.ConvertStringToBinarie(this.equilibreListe(valueCrypto.length,key));

    for (let index = 0; index < valueCrypto.length; index++) {
      
      valueDeCrypto.push( this.FusionXOR(valueCrypto[index],keyBinarie[index]));
      
    }

     return valueDeCrypto
  }

  CryptoXOR(values : string,key: string): any[]{

    let keyvalCrpto: any[][]=[];// un tableau qui contient la clé  en binaire et la phrase en binaire à Crypté
    let valueCrypto :any[]=[]; // un tableau qui contient la phrase cryptée

    // Tableaux qui contiennent la clé et la phrase en binaire
    keyvalCrpto = this.ConvertKeyAndString(values,key);
    console.log(keyvalCrpto)
    
    for (let index = 0; index < keyvalCrpto[0].length; index++) {
      
      valueCrypto.push(this.FusionXOR(keyvalCrpto[0][index],keyvalCrpto[1][index]));
      
    }
   
    return valueCrypto;
  }
// application de l'algorithme  XOR 
  FusionXOR(tab1 : any[], tab2 : any[]):string{
    let Resultat : string='';
     for (let index = 0; index < tab1.length; index++) {
      if(tab1[index]==tab2[index])
        Resultat += '0';
      else
        Resultat += '1';     
     }
   return Resultat;
  }
  // equilibreListe :pour que la taille de la clé soit supérieure a la taille la phrase à décrypter.
   
  equilibreListe(taille : number , tab : string ): string{
    let Resultat : string ='';
     for (let index = 0; index < (taille/ tab.length); index++) {
       Resultat += tab;       
     }
     return Resultat
  }

  ConvertKeyAndString(data : string, key:string): any[][]{
    let keyBinarie: any[]=[];
    let dataBinaire : any[]=[];

    key = this.equilibreListe(data.length, key);

    dataBinaire =this.ConvertStringToBinarie(data);
    keyBinarie =this.ConvertStringToBinarie(key);

    let valCrpto:any[][]=[];

    valCrpto.push(dataBinaire);
    valCrpto.push(keyBinarie);
   // Tableaux qui contiennent la clé et la phrase en binaire
    return valCrpto

    
  }

  ConvertStringToBinarie(values: string): any[]{
    var asci;
    var dataBinaire : any []=[];

    for (let i = 0; i < values.length; i++) {
        asci = values.charCodeAt(i);
        dataBinaire.push(asci.toString(2));
    }
    return dataBinaire
  }

  ConvertBinarieToString(dataString : any[]): string{
    let Resultat: string='';
    for (let i = 0; i < dataString.length; i++) {
      Resultat += String.fromCharCode(parseInt(dataString[i],2));
       }
    return Resultat;
  }

}