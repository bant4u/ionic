import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.page.html',
  styleUrls: ['./employee-detail.page.scss'],
})
export class EmployeeDetailPage implements OnInit {

  employee:IEmployee;
  constructor(private employeeService:EmployeeService,  private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        console.log(params.id);
        this.employeeService.getEmployee(params.id).subscribe(
          (employee) => {
            this.employee = employee;
    }
    );
      }
    );
    

  }

}
