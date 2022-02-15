import { Component, OnInit } from "@angular/core";
@Component({
    selector: 'acme-crypto-rot13',
    template: `  `,
    styleUrls: []
})
export class AcmeCryptoRot13 implements OnInit {

    constructor() { }
  
    ngOnInit(): void {
    }


    isLetter(str: string){
    
        //console.log(str,"**islettre**");
        let regExSpecial = /[a-zA-Z]/g;
        //console.log(/[a-zA-Z]/g.test(str))
        return regExSpecial.test(str);
        
      }
      EncryptorDecryptorROT13(values:string): string{
        let Resultat: string='';
       
        for (let i = 0; i < values.length; i++) {
          if(this.isLetter(values[i]))
            Resultat += String.fromCharCode(values[i].charCodeAt(0) + (values[i].toUpperCase() + " " <= "N" ? 13 : -13));
          else
          Resultat += values[i];
        }
        return Resultat;
      }
  
}