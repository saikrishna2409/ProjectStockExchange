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
  router: any;
  constructor(private userService:UserService) { }

  ngOnInit() {
  
  this.userService.getAllUsers().subscribe(data=>{
    this.users=data;
  });
}
  deleteUsers(user:User) {
    this.userService.deleteUser(user.id).subscribe();
    this.users=this.users.filter(u => u !== user);

    }
    updateUser(user:User){
      localStorage.removeItem('userId');
      localStorage.setItem('userId',user.id.toString());
      this.router.navigate(['updateuser']);
  }

}