export class User{   
	private id: number;
	private firstname: string;
	private lastname: string;
	private email: string;
	private password: string;
	private usertype: string;
 
	constructor(){}
	// getter
	public get getId(): number {
		return this.id;
	}
	public get getFirstname(): string {
		return this.firstname;
	}
	public get getLastname(): string {
		return this.lastname;
	}
	public get getEmail(): string {
		return this.email;
	}
	public get getPassword(): string {
		return this.password;
	}
	public get getUserType(): string {
		return this.usertype;
	}
	// setter
	public set setId(value: number){
		this.id =value;
	}
	public set setFirstname(value: string ){
		this.firstname= value;
	}
	public set setLastname(value: string){
		this.lastname=value;
	}
	public set setEmail(value: string){
		this.email=value;
	}
	public set setPassword(value: string){
		this.password=value;
	}
	public set setUserType(value: string){
		this.usertype= value;
	}




}