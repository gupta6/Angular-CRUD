import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiURL = 'http://localhost:5000/employees'

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiURL}/${id}`);
  }

  deleteEmployee(id: number): Observable<Employee>{
    return this.http.delete<Employee>(`${this.apiURL}/${id}`);
  }

  addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.apiURL, employee, httpOptions);
  }

  updateEmployee(employee: Employee): Observable<Employee>{
    console.log(employee);
    return this.http.put<Employee>(`${this.apiURL}/${employee.id}`, employee, httpOptions)
  }
}
