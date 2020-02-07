import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css']
})
export class AddstockComponent implements OnInit {

  addstock : FormGroup;
  constructor(private stockService:StockService,private formBuilder : FormBuilder) { }
  addUser()
  {
    this.stockService.saveStock(this.addstock.value).subscribe(data =>{
      console.log("User Inserted Successfully"+data); });
  }
  ngOnInit(){
    this.addstock =this.formBuilder.group({
      id:['',Validators.required],
      stockname:['',Validators.required],
      remarks:['',Validators.required]
  });
}

}
