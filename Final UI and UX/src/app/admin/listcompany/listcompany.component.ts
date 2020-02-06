import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcompany',
  templateUrl: './listcompany.component.html',
  styleUrls: ['./listcompany.component.css']
})
export class ListcompanyComponent implements OnInit {

  company:Admin[];

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit() {
  
  this.adminService.getAllAdmin().subscribe(data=>{
    this.company=data;
  });
}
  deleteUsers(admin:Admin) {
    this.adminService.deleteAdmin(admin.id).subscribe();
    this.company=this.company.filter(u => u !== admin);

    }
    updateUser(admin:Admin){
      localStorage.removeItem('');
      localStorage.setItem('adminId',admin.id.toString());
      this.router.navigate(['updatecompany']);
  }

}
