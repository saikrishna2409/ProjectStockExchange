import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminadddetails',
  templateUrl: './adminadddetails.component.html',
  styleUrls: ['./adminadddetails.component.css']
})
export class AdminadddetailsComponent implements OnInit {
  addCompany: FormGroup;
  constructor(private adminService:AdminService,private formBuilder : FormBuilder) { }
  addAdmindetails()
  {
    this.adminService.saveAdmin(this.addCompany.value).subscribe(data =>{
      console.log("User Inserted Successfully"+data); });
  }
  ngOnInit(){
    this.addCompany=this.formBuilder.group({
      id:['',Validators.required],
      sector:['',Validators.required],
      companyname:['',Validators.required],
      ceo:['',Validators.required],
      bod:['',Validators.required],
      stockList:['',Validators.required],
      turnover:['',Validators.required]
  });
}

}
