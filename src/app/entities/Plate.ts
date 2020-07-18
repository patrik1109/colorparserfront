import { Glue } from "./Glue";
import { Miks } from "./Miks";

export class Plate {
    
    id:number;
    number:string;
    name:string;
    color:string;
    hight:number;
    lenght:number;
    width:number;
    miks: Miks[]=[];
    glues: Glue[]=[];
    idManufacturer:number;
   
}