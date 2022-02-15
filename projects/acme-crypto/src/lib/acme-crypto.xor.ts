import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-acme-crypto-xor',
  template: `  `,
  styles: [ ]
})
export class AcmeCryptoXor implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public hello(){
      console.log('yes je suis xor');
  }

//   DeCryptoXOR(valCrptoBinaire :any[], key: string): any[]{

//      // valueCrypto un tableu qui contien la phrase crypté et Key c est la clé du crptage
//     let valueDeCrypto : any[]=[];
//     let keyBinarie :any[]=[];
//     //let valCrptoBinaire: any[]=[];

//     //valCrptoBinaire = this.ConvertStringToBinarie(valueCrypto);
    
//     // pour que la taille du soit > a la taile la phrase a décrypté.
//     keyBinarie=this.ConvertStringToBinarie(this.equlibreListe(valCrptoBinaire.length,key));

//     for (let index = 0; index < valCrptoBinaire.length; index++) {
      
//       valueDeCrypto.push( this.FusionXOR(valCrptoBinaire[index],keyBinarie[index]));
      
//     }

//    console.log("** valeur decrypté ** :",valueDeCrypto)

//    console.log('** valeur en string **', this.ConvertBinarieToString(valueDeCrypto));
//       return valueDeCrypto
//   }
 
DeCryptoXOR(valueCrypto:any[], key: string): any[]{
    //let valueCrypto :any[]=[]; // un tableu qui contien la la phrase crypté
    let valueDeCrypto : any[]=[];
    //let key : string='yassine';
    let keyBinarie :any[]=[];
    //valueCrypto = this.CryptoXOR('yassine',key);
    // pour que la taille du soit > a la taile la phrase a décrypté.
    keyBinarie=this.ConvertStringToBinarie(this.equlibreListe(valueCrypto.length,key));

    for (let index = 0; index < valueCrypto.length; index++) {
      
      valueDeCrypto.push( this.FusionXOR(valueCrypto[index],keyBinarie[index]));
      
    }

   console.log("** valeur decrypté ** :",valueDeCrypto)

   console.log('** valeur en string **', this.ConvertBinarieToString(valueDeCrypto));
      return valueDeCrypto
  }

  CryptoXOR(values : string,key: string): any[]{

    let keyvalCrpto: any[][]=[];// un tableu qui contien la la clé  en nbinaire et la phrasea en binaire à Crypté
    let valueCrypto :any[]=[]; // un tableu qui contien la la phrase crypté

    // tableux qui contient la clé les la phrase en binaire
    keyvalCrpto = this.ConvertKeyAndString(values,key);
    console.log(keyvalCrpto)
    
    for (let index = 0; index < keyvalCrpto[0].length; index++) {
      
      valueCrypto.push(this.FusionXOR(keyvalCrpto[0][index],keyvalCrpto[1][index]));
      
    }
   
    return valueCrypto;
  }

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

  equlibreListe(taille : number , tab : string ): string{
    let Resultat : string ='';
     for (let index = 0; index < (taille/ tab.length); index++) {
       Resultat += tab;       
     }
    
     console.log("yes",Resultat);
     return Resultat
  }
  ConvertKeyAndString(data : string, key:string): any[][]{
    let keyBinarie: any[]=[];
    let dataBinaire : any[]=[];

    key = this.equlibreListe(data.length, key);

    dataBinaire =this.ConvertStringToBinarie(data);
    keyBinarie =this.ConvertStringToBinarie(key);

    let valCrpto:any[][]=[];

    valCrpto.push(dataBinaire);
    valCrpto.push(keyBinarie);
    //console.log(keyBinarie);
    

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
  // console.log("Le nombre décimal est " + decimal);
  // var octal = decimal.toString(8);
  // console.log("Le nombre octal est " + octal);
  // var hexadecimal = decimal.toString(16);
  // console.log("Le nombre hexadécimal est " + hexadecimal);
  // var binary = asci.toString(2);
  // console.log("Le nombre binaire est " + binary);
  // console.log("Le tableu est " + this.dataBinaire);
  
  //console.log("te",String.fromCharCode(parseInt(data[0], 16)))
  }

  ConvertBinarieToString(dataString : any[]): string{
    let Resultat: string='';
    for (let i = 0; i < dataString.length; i++) {
      Resultat += String.fromCharCode(parseInt(dataString[i],2));
  }
   // console.log("text",String.fromCharCode(parseInt(this.dataBinaire[0],2)));
   console.log("** vale crypté",Resultat)
    return Resultat;
  }

}