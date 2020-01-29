import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { User } from '../models/user';
@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
users:User[];
  constructor(private userService:UserService) { }

  ngOnInit() {
  
  this.userService.getAllUsers().subscribe(data=>{
    this.users=data;
  })
  }
}
