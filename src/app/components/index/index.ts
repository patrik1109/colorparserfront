import { HttpClient} from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import {User} from 'D:/WEB/colorparser/colorparserfront/src/app/entities/User';   
import {Glue} from 'D:/WEB/colorparser/colorparserfront/src/app/entities/Glue';
import{Manufacturer} from 'D:/WEB/colorparser/colorparserfront/src/app/entities/Manufacturer'; 
import { DomSanitizer  } from '@angular/platform-browser';

@Component({
    selector: 'index',
    template: 
             
          `<ul>
                    <li *ngFor="let manufacturer of manufactores">
                        <p>Название: {{manufacturer?.name}}</p>
                        <p>Телефон: {{manufacturer?.phone}}</p>
                        <p>Адрес производителя: {{manufacturer?.address}}</p>
                        <img [src]="manufacturer.picture"/>
                    </li>
           </ul>`
   
})



export class Index implements OnInit { 
    users: User[]=[];
    glues: Glue[]=[];
    manufactores: Manufacturer[] = [];
    constructor(private http: HttpClient,private readonly sanitizer: DomSanitizer){}
      
    ngOnInit(){
       
        // this.http.get('http://localhost:4300/index').subscribe((data:User[]) => this.users = data);
        //this.http.get('http://localhost:4300/index').subscribe((data:Glue[]) => this.glues = data);
        this.http.get('http://localhost:4300/index').subscribe((data:Manufacturer[]) => this.manufactores = data);
    }

    sanitizeImgUrl(url: string) {
        console.log("Hello");
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        
      }
    
}
 

