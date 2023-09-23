import { Component, ElementRef, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesService } from 'src/app/services/employees.service';
import { PlatformLocation } from '@angular/common';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css'],
})
export class DeleteEmployeeComponent {
  closeResult = '';
  empId: number = 0;

  @ViewChild('mymodal') mymodal: ElementRef | undefined;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private employeesService: EmployeesService,
    private route: ActivatedRoute,
  ) {
    // This is the first lifecyle hook which will be called. 
  }

  ngOnChanges(changes: SimpleChanges){
    // This lifecyle hook will run multiple times. First time it will execute when component is  after constrcutor before ngOnInit. Then after that it will run everytime when binded input is changed.
  }

  ngOnInit() {
    // This lifecyle hook will run at the time of component initilization.
    this.empId = this.route.snapshot.params['id'];

    // this.route.queryParams.subscribe((params: any) => (
    //   console.log(params.employee)
    // ))
    // this.route.snapshot.paramMap.get('employee')
  }

  ngDoCheck(){
    // This hook will also run multiple times. First when component is initialized. Everytime there is any action performed (or change detected) in component like button click or change in variable this hook will execute.
  }

  ngAfterContentInit(){
    // This hook will get execute when content projected with ngContent is initialized.
  }

  ngAfterContentChecked(){
    // This hook will get execute whenever content projected with ngContent get changed.
  }

  ngAfterViewInit(): void {
    // This hook will get execute when component view is completely rendered.
    this.open(this.mymodal);
  }

  ngAfterViewChecked(){
    // This hook will get execute when component and its child component view is completely initialized, and all process and changes are done.
  }

  ngOnDestroy(){
    // This hook will get execute just before component is destroyed.
    this.closeResult = `Dismissed ${this.getDismissReason()}`;
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.employeesService.deleteEmployee(this.empId).subscribe(() => (
            this.getDismissReason()
          ));
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason()}`;
        }
      );
  }

  private getDismissReason() {
    this.router.navigate(['/']);
  }
}
