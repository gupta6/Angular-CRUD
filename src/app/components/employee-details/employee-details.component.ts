import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Employee } from 'src/app/Employee';
import { NameWhiteSpace } from '../../nameWhiteSpace.validator';
import { EmployeesService } from 'src/app/services/employees.service';

function formatDate(date: string): any {
  let formattedDate: any = new Date(date);
  const year = formattedDate.getFullYear();
  const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
  const day = String(formattedDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  id: number = 0;
  isEditFlow: boolean = false;
  model: any;
  employeeForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      NameWhiteSpace.noSpaceAllowed,
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      NameWhiteSpace.noSpaceAllowed,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      NameWhiteSpace.noSpaceAllowed,
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
    dob: new FormControl(
      '', [
      Validators.required,
      NameWhiteSpace.dateMaxYear('2002')
    ]),
    doj: new FormControl(
      '',
      Validators.required,
      NameWhiteSpace.dateMaxYear('2023')
    ),
  });

  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isEditFlow = this.route.snapshot.url[1].path === 'edit';

    if (this.isEditFlow) {
      this.employeesService
        .getEmployeeById(this.id)
        .subscribe((employee: Employee) => {
          return this.employeeForm.patchValue({
            firstname: employee.firstname,
            lastname: employee.lastname,
            email: employee.email,
            phone: employee.phone,
            dob: formatDate(employee.dob),
            doj: formatDate(employee.doj),
          });
        });
    }
  }

  getControl(name: string): AbstractControl | null {
    return this.employeeForm.get(name);
  }

  submit(data: any): void {
    console.log(data);
    if (this.isEditFlow) {
      data.id = this.id;
      this.employeesService
        .updateEmployee(data)
        .subscribe(() => this.router.navigate(['/']));
    } else {
      this.employeesService
        .addEmployee(data)
        .subscribe((employee: Employee) => this.router.navigate(['/']));
    }
  }
}
