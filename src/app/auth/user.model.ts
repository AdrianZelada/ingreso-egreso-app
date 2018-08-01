// export class User {
//     constructor(public nombre: string , public email:string, public uid:string) {}
// }

export class User {
    nombre  : string ;
    email   : string ;
    uid     : string ;
    constructor( dataUser : DataUser) {
        Object.assign(this,dataUser);
    }
}

interface DataUser{
    nombre  : string ;
    email   : string ;
    uid     : string ;
}