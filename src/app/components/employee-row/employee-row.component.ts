import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-row',
  templateUrl: './employee-row.component.html',
  styleUrls: ['./employee-row.component.css']
})
export class EmployeeRowComponent {
  faPen = faPen;
  faTrash = faTrash;

  @Input() employees!: Employee[];
  @Output() editEmployee = new EventEmitter<Employee>();
  @Output() deleteEmployee = new EventEmitter<Employee>();

  onEdit(employee: Employee){
    this.editEmployee.emit(employee);
  }

  onDelete(employee: Employee){
    this.deleteEmployee.emit(employee);
  }
}
