import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Customer } from '../models/bankingreg.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-bankingreg',
  templateUrl: './bankingreg.component.html',
  styleUrls: ['./bankingreg.component.css']
})
export class BankingregComponent implements OnInit {

  customer:Customer;
  cust:any;
  msg:any;
  constructor(private userreg:UserService) { 
    this.customer = new Customer();
  }

  InsertCustomer()
  {
    // this.userreg.addCustomer(this.customer).subscribe(data=>console.log(data));
    this.userreg.addCustomer(this.customer).subscribe(u=>{this.cust=u;this.msg=undefined},errmsg=>this.msg=errmsg.error.Message);
  }


  ngOnInit(): void {
  }
}
