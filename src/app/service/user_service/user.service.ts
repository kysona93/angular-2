import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../../class/user/user';
 
@Injectable()  
export class UserService { 
	private users: User[];

	constructor(private http: Http){ }

	getUserByUsername(username: string){
	  var users = [new User(), new User(), new User() ];
	  users[0].setEmail="user@gmail.com";
      users[0].setFirstname="Seng";
      users[0].setLastname="Oudam";
      users[0].setPassword="s12345"; 
      users[1].setEmail="merchant@gmail.com";
      users[1].setFirstname="Ky";
      users[1].setLastname="Sona";
      users[1].setPassword="s12345";
      users[2].setEmail="admin@gmail.com";
      users[2].setFirstname="Seong";
      users[2].setLastname="Kanel";
      users[2].setPassword="s12345";

	  for(let u of users){
		  if(u.getLastname == username ){
			  return u;
		  }
	  }
	  return null;
	  // user http
	   /* let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		this.http.post('http://localhost:3001/sessions/create', username, {
			headers: headers
			})
			.map(res => res.json())
			.subscribe(
			data => this.saveJwt(data.id_token),
			err => this.logError(err),
			() => console.log('Authentication Complete')
			); */

	}

	getUser(user: User):Observable<User[]>{
		return this.http.get("http://localhost:8080/asset/mock-data/user.json")
				   .retry(2)
				   .map((response:Response) => <User[]>response.json())
	 			   .catch(this.handleError);
	}

	saveUser(user: User){ //Observable<any[]>	
		let success_status: number = 201;
		let success_msg: string = "success sign up";
		let fail_status: number = 400;
		let fail_msg: string = "fail sign up";

		if(success_status == 201) return true;
		else return false; 

		// let jsonuser=JSON.stringify({
		// 	firstname: user.getFirstname,
		// 	lastname: user.getLastname,
		// 	email: user.getEmail,
		// 	password: user.getPassword
		// });
		// alert(jsonuser);
		// let headers = new Headers();
		// headers.append('Content-Type', 'application/json');  // x-www-form-urlencoded
		// // headers.append('Access-Control-Allow-Origin','*')

		// this.http.post('http://localhost:9000/api-docs/v1/signup', JSON.stringify({
		// 					"email": "sona@gmail.com",
		// 					"password": "s12345"
		// 				}) ,
		// 				{headers: headers} )
		// 	       .map((response:Response) => <any[]>response.json())
		// 		   //.do(data => console.log('All: ' + JSON.stringify(data)))
		// 		   .catch(this.handleError)
		// 		   .subscribe(
		// 				data => console.log("response data: "+JSON.stringify(data)),
		// 				err => console.log("error post: "+err),
		// 				() => console.log('Authentication Complete')
		// 			);

	}
 	

	updateUser(user: User): boolean { // Observable<any[]>
		let success_status: number = 200;
		let success_msg: string = "success updated";
		let fail_status: number = 400;
		let fail_msg: string = "fail updated";

		if(success_status == 200) return true;
		else return false;

		/*let jsonuser=JSON.stringify({
			firstname: user.getFirstname,
			lastname: user.getLastname,
			email: user.getEmail,
			password: user.getPassword
		});
		let headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.put("http://localhost:8080/asset/mock-data/adduser", jsonuser, {
						headers: headers
				   })
			       .map((response:Response) => <any[]>response.json())
				   .catch(this.handleError);*/
	}

	deleteUser(id: number):Observable<any[]>{
		/*return this.http.delete("http://localhost:8080/asset/mock-data/adduser/"+id)
			       .map((response:Response) => <any[]>response.json())
				   .catch(this.handleError);*/
				   return null;
	}

	private handleError(error:Response){
		console.error(error);
		return Observable.throw(error.json().error || "server error");
	}


}
