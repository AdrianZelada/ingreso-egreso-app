
export class ingresoegreso {
    description :string;
    amount:number;
    type:string;
    ui?:string;
    constructor( data : DataIngresoEgreso ) {
        Object.assign(this, data );
    }
}

interface DataIngresoEgreso{
    description :string;
    amount:number;
    type:string;
    ui?:string;
}