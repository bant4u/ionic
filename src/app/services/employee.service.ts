import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = "http://dummy.restapiexample.com/api/v1";
  
  constructor(private httpClient:HttpClient) { }
  
  getEmployees():Observable<IEmployee[]>{
    return this.httpClient.get<IEmployee[]>(this.baseUrl+'/employees',{
      observe:'body',
      responseType:'json'
    });
  }

  getEmployee(employeeId:number):Observable<IEmployee>{
    return this.httpClient.get<IEmployee>(this.baseUrl+'/employee/'+employeeId,{
       observe:'body',
       responseType:'json' 
    });
  }
}
