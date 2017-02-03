export class UserAddress{
    private user_id:number;
    private id:number;
    private city:string;
    private province:string;
    private postal_code:string;
    private bill_addr:string;

    constructor(){ }
    // getter 
    public get getUserId():number{
        return this.user_id;
    }
    public get getId():number{
        return this.id;
    }
    public get getCity():string{
        return this.city;
    }
    public get getProvince():string{
        return this.province;    
    }
    public get getPostalCode():string{
        return this.postal_code;
    }
    public get getBillAddress():string{
        return this.bill_addr;
    }
    // setter
    public set setUserId(value:number){
        this.user_id=value;
    }
    public set setId(value:number){
        this.id=value;
    }
    public set setCity(value:string){
        this.city=value;
    }
    public set setProvince(value:string){
        this.province=value;
    }
    public set setPostalCode(value:string){
        this.postal_code=value;
    }
    public set setBillAddress(value:string){
        this.bill_addr=value;
    }
    
}