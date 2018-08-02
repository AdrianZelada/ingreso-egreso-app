
export class ingresoegreso {
    description :string;
    amount:number;
    type:string;
    uid?:string;
    constructor( data : DataIngresoEgreso ) {
        Object.assign(this, data );
    }
}

interface DataIngresoEgreso{
    description :string;
    amount:number;
    type:string;
    uid?:string;
}