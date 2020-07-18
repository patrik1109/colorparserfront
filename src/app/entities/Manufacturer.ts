import { Glue } from "./Glue";
import { Plate } from "./Plate";


export class Manufacturer{
    
    id:number;
    number:string;
    name:string;
    phone:string;
    address:string;
    fax:string;
    email:string;
    glues: Glue[]=[];
    plates: Plate[] = [];
    picture: string;
}