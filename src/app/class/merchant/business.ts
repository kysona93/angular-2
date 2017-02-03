export class Business{
    private id:number;
    private name:string;
    private phone:string; 
    private email:string;
    private zipcode:string;
    private firstname:string;
    private lastname:string;
    private typebusiness:string;

    constructor(){   }
    // getter
    public get getId():number{
        return this.id;
    }
    public get getName():string{
        return this.name;
    }
    public get getPhone():string{
        return this.phone;
    }
    public get getEmail():string{
        return this.email;
    }
    public get getZipcode():string{
        return this.zipcode;
    }
    public get getFirstname():string{
        return this.firstname;
    }
    public get getLastname():string{
        return this.lastname;
    }
    public get getTypebusiness():string{
        return this.typebusiness;
    }
    // setter
    public set setId(value:number){
        this.id=value;
    }
    public set setName(value:string){
        this.name=value;
    }
    public set setPhone(value:string){
        this.phone=value;
    }
    public set setEmail(value:string){
        this.email=value;
    }
    public set setZipcode(value:string){
        this.zipcode=value;
    }
    public set setFirstname(value:string){
        this.firstname=value;
    }
    public set setLastname(value:string){
        this.lastname=value;
    }
    public set setTypeBusiness(value:string){
        this.typebusiness=value;
    }

}