import { Component } from "@angular/core";

@Component({
    selector:'acme-crypto-zmap',
    template: `  `,
    styleUrls: []
})

export class AcmeCryptoZmap {
    
    constructor() { }
 
    public DeCryptoOrCryptoZmap( values: string,crypto:boolean): string{
        let Resultat=values;

        var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var b = "defghilmnQRSTrstuvwxyzABCDEFGabcHIJKLMopqNOPUVjkWXYZ";
        
        Resultat=values.replace(/[a-zA-Z]/g, (value) => crypto ? b[a.indexOf(value)] : a[b.indexOf(value)] );
       
       return Resultat;
      }
     


}