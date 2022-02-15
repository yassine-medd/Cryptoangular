import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Crypto App';
  decrypto='';
  values = '';
  character: string='';
  dataBinaire : any[]=[];
  dataString : string='';
  public remplace(value : string){

  //  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  //  this.decrypto = value.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
  //  // or 
  //  // character = String.fromCharCode(value.charCodeAt(0) + (value.toUpperCase() + " " <= "N" ? 13 : -13));
   
  //  console.log(this.decrypto);
  }
  isLetter(str: string){
    
    //console.log(str,"**islettre**");
    let regExSpecial = /[a-zA-Z]/g;
    //console.log(/[a-zA-Z]/g.test(str))
    return regExSpecial.test(str);
    
  }
  EncryptorDecryptorROT13(){
    this.character="";
   
    for (let i = 0; i < this.values.length; i++) {
      if(this.isLetter(this.values[i]))
        this.character += String.fromCharCode(this.values[i].charCodeAt(0) + (this.values[i].toUpperCase() + " " <= "N" ? 13 : -13));
      else
      this.character += this.values[i];
    }
    
  }
  CryptoZmap(){
    this.character=this.values;
    //console.log(this.character)
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var b = "defghilmnQRSTrstuvwxyzABCDEFGabcHIJKLMopqNOPUVjkWXYZ";
    
    this.character=this.character.replace(/[a-zA-Z]/g, (value) => b[a.indexOf(value)]);
   // console.log(this.character,'**', this.values)
   // or 
   // character = String.fromCharCode(value.charCodeAt(0) + (value.toUpperCase() + " " <= "N" ? 13 : -13));
   
   console.log(this.decrypto);
  }
  DeCryptoZmap(){
    this.character=this.values;
    //console.log(this.character)
    var b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var a = "defghilmnQRSTrstuvwxyzABCDEFGabcHIJKLMopqNOPUVjkWXYZ";
    
    this.character=this.character.replace(/[a-zA-Z]/g, (value) => b[a.indexOf(value)]);
    console.log(this.character,'**', this.values)
   // or 
   // character = String.fromCharCode(value.charCodeAt(0) + (value.toUpperCase() + " " <= "N" ? 13 : -13));
   
   console.log(this.decrypto);
  }
  DeCryptoXOR(){
    let valueCrypto :any[]=[]; // un tableu qui contien la la phrase crypté
    let valueDeCrypto : any[]=[];
    let key : string='yassine';
    let keyBinarie :any[]=[];
    valueCrypto = this.CryptoXOR();
    // pour que la taille du soit > a la taile la phrase a décrypté.
    keyBinarie=this.ConvertStringToBinarie(this.equlibreListe(valueCrypto.length,key));

    for (let index = 0; index < valueCrypto.length; index++) {
      
      valueDeCrypto.push( this.FusionXOR(valueCrypto[index],keyBinarie[index]));
      
    }

   console.log("** valeur decrypté ** :",valueDeCrypto)

   console.log('** valeur en string **', this.ConvertBinarieToString(valueDeCrypto));
      
  }
  CryptoXOR(): any[]{
    let keyvalCrpto: any[][]=[];// un tableu qui contien la la clé  en nbinaire et la phrasea en binaire à Crypté
    let valueCrypto :any[]=[]; // un tableu qui contien la la phrase crypté
    keyvalCrpto = this.ConvertKeyAndString(this.values,'yassine');
    console.log(keyvalCrpto)
    
    for (let index = 0; index < keyvalCrpto[0].length; index++) {
      
      valueCrypto.push(this.FusionXOR(keyvalCrpto[0][index],keyvalCrpto[1][index]));
      
    }
    console.log(valueCrypto);
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
    return Resultat;
  }

  OnKey(event: any) { 
    this.values = event.target.value ; 
  }
}
