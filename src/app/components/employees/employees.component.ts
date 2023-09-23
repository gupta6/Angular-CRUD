import { Component } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from 'src/app/Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees: Employee[] = [];

  constructor(private empService: EmployeesService, private router: Router){}

  ngOnInit(){
    this.empService.getEmployees().subscribe(employees => (this.employees = employees));
    console.log(this.employees);
  }

  onDelete(employee: Employee){

    // Two ways of passing data thorugh routing. first via queryparams but data is visible in url. In second way data is not visible but url not chnaged either.
    // this.router.navigate([`employee/delete`], { queryParams: { employee: JSON.stringify(employee) } })
    // this.router.navigate(['employee/delete', { employee: obj }], {
    //   skipLocationChange: true
    // })

    this.router.navigate(['employee/delete', employee.id]);
  }

  onEdit(employee: Employee){
    console.log(employee);
    this.router.navigate([`employee/edit`, employee.id])
  }
}
