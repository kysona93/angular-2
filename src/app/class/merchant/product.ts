export class Product{
    private id:number;
    private name:string;
    private amount:string;
    private firstname:string;
    private lastname:string;
    private email:string;
    private phone:string;
    private streetno:string;
    private city:string;
    private province:string;
    private zipcode:string;
    private website:string;
    private storefront:number;

    constructor(){}
    // getter
    public get getId():number{
        return this.id;
    }
    public get getName():string{
        return this.name;
    }
    public get getAmount():string{
        return this.amount;
    }
    public get getFirstname():string{
        return this.firstname;
    }
    public get getLastname():string{
        return this.lastname;
    }
    public get getEmail():string{
        return this.email;
    }
    public get getPhone():string{
        return this.phone;
    }
    public get getStreetno():string{
        return this.streetno;
    }
    public get getCity():string{
        return this.city;
    }
    public get getProvince():string{
        return this.province;
    }
    public get getZipcode():string{
        return this.zipcode;
    }
    public get getWebsite():string{
        return this.website;
    }
    public get getStoreFront():number{
        return this.storefront;
    }
    // setter
    public set setId(value:number){
        this.id=value;
    }
    public set setName(value:string){
        this.name=value;
    }
    public set setAmount(value:string){
        this.amount=value;
    }
    public set setFirstname(value:string){
        this.firstname=value;
    }
    public set setLastname(value:string){
        this.lastname=value;
    }
    public set setEmail(value:string){
        this.email=value;
    }
    public set setPhone(value:string){
        this.phone=value;
    }
    public set setStreetno(value:string){
        this.streetno=value;
    }
    public set setCity(value:string){
        this.city=value;
    }
    public set setProvince(value:string){
        this.province=value;
    }
    public set setZipcode(value:string){
        this.zipcode=value;
    }
    public set setWebsite(value:string){
        this.website=value;
    }
    public set setStoreFront(value:number){
        this.storefront=value;
    }

}