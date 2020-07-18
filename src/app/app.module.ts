

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpClientModule }   from '@angular/common/http';
import {Index} from './components/index';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './components/notfound/notfound';


const appRoutes: Routes =[
    { path: '', component: Index},
    { path: '**', component: NotFoundComponent }
];
 

 
@NgModule({
    imports:      [BrowserModule,HttpClientModule],
    /*declarations: [ AppComponent],
    bootstrap:    [ AppComponent]*/
    declarations: [Index, NotFoundComponent],
    bootstrap:    [Index]
})
export class AppModule { }