import { Component, OnInit } from "@angular/core";

@Component({
    selector:'acme-crypto-zmap',
    template: `  `,
    styleUrls: []
})

export class AcmeCryptoZmap implements OnInit{
    constructor() { }

    ngOnInit(): void {
        
    }
 
     
    DeCryptoOrCryptoZmap( values: string,crypto:boolean): string{
        let Resultat=values;
        //console.log(this.character)
        var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var b = "defghilmnQRSTrstuvwxyzABCDEFGabcHIJKLMopqNOPUVjkWXYZ";
        
        Resultat=values.replace(/[a-zA-Z]/g, (value) => crypto ? b[a.indexOf(value)] : a[b.indexOf(value)] );
       // console.log(this.character,'**', this.values)
       // or 
       // character = String.fromCharCode(value.charCodeAt(0) + (value.toUpperCase() + " " <= "N" ? 13 : -13));
       
       return Resultat;
      }
     


}