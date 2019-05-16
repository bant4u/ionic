import { Component } from '@angular/core';
import { IEmployee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  employees:IEmployee[];

  constructor(private employeeService:EmployeeService,private router:Router){}
  ngOnInit(){
    this.employeeService.getEmployees().subscribe(
      (employee)=>{
        this.employees=employee;
        console.log(employee);
      }
      
    );
  }

  showEmployee(employeeId){
    this.router.navigate(['/employee-detail',employeeId]);
  }
}
