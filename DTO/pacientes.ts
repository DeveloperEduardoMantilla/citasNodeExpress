import {Expose, Type, Transform} from "class-transformer";

class Pacientes{
    @Expose({name: "id"})
    @Transform(({value})=>(Math.floor(value)) ? value: "Error", {toClassOnly: true})
    ID:number;
    @Expose({name: "nombre"})
    @Type(() => String)
    nom_com: string; 

    constructor(ID: number, NOMBRE: string){
        this.ID = ID;
        this.nom_com = NOMBRE;
    }

    get nombreId(): string{
        return `${this.ID} - ${this.nom_com}`;
    }
}

export default Pacientes;