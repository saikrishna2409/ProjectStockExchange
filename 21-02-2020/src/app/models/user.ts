export  class User{
    id:number;
    username:string;
    password:string;
    reenterpassword:string;
    email:string;
    phone:number;
    constructor(id:number,username:string,password:string,reenterpassword:string,email:string,phone:number){

    this.id=id;
    this.username=username;
    this.password=password;
    this.reenterpassword=reenterpassword;
    this.email=email;
    this.phone=phone;
    }
}