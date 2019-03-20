import {Component, Injector} from '@angular/core';

import { CRUDService } from '../../core/crud.service';
import { Employee } from '../../core/crud-model';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModal } from '../../core/delete-modal';

@Component({
  selector: 'read',
  templateUrl: './read.component.html',
  styleUrls:['./read.component.scss']
})
export class ReadComponent   {
  private employeeList: Employee[];
  constructor(private crudService: CRUDService,
              // private _modalService: NgbModal
              ) {
      crudService.query().subscribe(response => {
          this.employeeList = response;
          console.log("employeee :: ",this.employeeList)
      })
  }

  private deleteEmp(id:string){
    this.crudService.delete(id).subscribe(response =>{
         if(response){
          this.employeeList.splice(this.employeeList.findIndex(v=> v['_id']['$oid']===id));
         }
    })
  }

  // openModal() {
  //   this._modalService.open(DeleteModal);
  // }

  
  
}