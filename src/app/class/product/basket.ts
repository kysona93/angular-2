//import * as Collections from 'typescript-collections';

export class Basket{
    private id:string;
    private user_id:number;
    //private pro_id = new Collections.Set<string>();
    private pro_qty:number;

    constructor(){ }
    // helper method 
    // public addProId(value:string){
    //     this.pro_id.add(value);
    // }
    // getter
    public get getId():string{
        return this.id;
    }
    public get getUserId():number{
        return this.user_id;
    }
    // public get getProId():Collections.Set<string>{
    //     return this.pro_id;
    // }
    public get getProQty():number{
        return this.pro_qty;
    }
    // setter
    public set setId(value:string){
        this.id=value;
    }
    public set setUserId(value:number){
        this.user_id=value;
    }
    // public set setProId(value:Collections.Set<string>){
    //     this.pro_id=value;
    // }
    public set setProQty(value:number){
        this.pro_qty=value;
    }
}