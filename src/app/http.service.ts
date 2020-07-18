import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './entities/User';
   
@Injectable()
export class HttpService{
   
    constructor(private http: HttpClient){ }
 
    postData(user: User){
          
        const body = {name: user.name, age: user.age};
        return this.http.get('http://localhost:4300/index'); 
    }
}