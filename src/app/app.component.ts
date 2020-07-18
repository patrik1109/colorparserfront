/*import {HttpClient} from '@angular/common/http';*/
import {HttpClient} from '@angular/common/http/';

import { Component, OnInit} from '@angular/core';
import {User} from './entities/User';   
import {Glue} from './entities/Glue';
import{Manufacturer} from './entities/manufacturer'; 
import { DomSanitizer  } from '@angular/platform-browser';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

 @Component({
    selector: 'purchase-app',
    template:  `<ul>
                    <li *ngFor="let manufacturer of manufactores">
                    <p>Название: {{manufacturer?.name}}</p>
                    <p>Телефон: {{manufacturer?.phone}}</p>
                    <p>Адрес производителя: {{manufacturer?.address}}</p>
                    <img [src]="manufacturer.picture"/>
                    </li>
                </ul>`         
          
   
})



export class AppComponent implements OnInit { 
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
 