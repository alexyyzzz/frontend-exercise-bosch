import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeList } from '../services/employee-list';
import { EmployeeListService } from '../services/employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];
  dataSource: EmployeeList[];

  constructor(private modalService: NgbModal, private employeeService: EmployeeListService) { }

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe(res => {
      this.dataSource = res;
    });
  }

  openAddModal(): void {
    this.modalService.open(AddEmployeeComponent);
  }

}
