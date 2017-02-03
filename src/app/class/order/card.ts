export class Card{
    private card_name:string;
    private card_number:string;
    private exp_date:string;
    private sec_code:string;

    constructor(){}
    // getter
    public get getCardName():string{
        return this.card_name;
    }
    public get getCardNumber():string{
        return this.card_number;
    }
    public get getExpDate():string{
        return this.exp_date;
    }
    public get getSecurityCode():string{
        return this.sec_code;
    }
    // setter
    public set setCardName(value:string){
        this.card_name=value;
    }
    public set setCardNumber(value:string){
        this.card_number=value;
    }
    public set setExpDate(value:string){
        this.exp_date=value;
    }
    public set setSecurityCode(value:string){
        this.sec_code=value;
    }
}