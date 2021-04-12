import { Component, OnInit } from '@angular/core';
import { EmployeeList } from '../services/employee-list';
import { EmployeeListService } from '../services/employee-list.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  employee: EmployeeList;
  employeeList: EmployeeList[];
  displaySuccess: boolean = false;
  displayFail: boolean = false;
  employeeExists: EmployeeList[];
  constructor(private employeeService: EmployeeListService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  addEmployee(): void{
    this.displayFail = false;
    this.displaySuccess = false;
    this.employee = {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      id: this.employeeId
    };
    this.employeeService.getEmployeeList().subscribe(res => {
      this.employeeList = res;
      this.employeeExists = this.employeeList.filter(x => x.id === this.employee.id);
      if(this.employeeExists.length > 0){
        this.displayFail = true;
      }
      else{
        this.employeeService.addEmployee(this.employee);
        this.displaySuccess = true;
      }
      
    })
   
  }

  closeModal(): void{
    this.activeModal.close();
    window.location.reload();
  }

}
