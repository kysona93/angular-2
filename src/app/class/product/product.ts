export class Product{
    private id:number;
    private code:string;
    private name:string;
    private price:number;
    private qty:number;
    constructor(){}

    // getter
    public get getId():number{
        return this.id;
    }
    public get getCode():string{
        return this.code;
    }
    public get getName():string{
        return this.name;
    }
    public get getPrice():number{
        return this.price;
    }
    public get getQty():number{
        return this.qty;
    }
    // setter
    public set setId(value:number){
        this.id=value;
    }
    public set setCode(value:string){
        this.code=value;
    }
    public set setName(value:string){
        this.name=value;
    }
    public set setPrice(value:number){
        this.price=value;
    }
    public set setQty(value:number){
        this.qty=value;
    }
    
}