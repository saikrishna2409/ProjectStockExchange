import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  createAccount : FormGroup;
  constructor(private userService:UserService) { }
  addUser()
  {
    this.userService.saveUser(this.createAccount.value).subscribe(data =>{
      console.log("User Inserted Successfully"+data); });
  }
  ngOnInit(){
    this.createAccount = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null,Validators.required),
      're-enterpassword': new FormControl(null,Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'mobile' : new FormControl(null,Validators.required)
  });
}

    onSubmit() {
      //This is very simple, do not need to do anything
       console.log(this.createAccount);
      }


}
