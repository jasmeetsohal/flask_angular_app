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
  private page = 1;
  private pageSize = 2;
  private collectionSize=0;
  private p;
  constructor(private crudService: CRUDService
              ) {
      this.loadAll();
  }

  
  private loadAll(){
    let options={skip:(this.page-1)*this.pageSize,
                 limit:this.pageSize}
                  this.crudService.query(options).subscribe(response => {
                    this.collectionSize = response['total_count'];
                     this.employeeList = response['data'];
              })
  }

  private deleteEmp(id:string){
    this.crudService.delete(id).subscribe(response =>{
         if(response){
          this.employeeList.splice(this.employeeList.findIndex(v=> v['_id']['$oid']===id));
         }
    })
  }

  private onPageSizeModelChanged(event){
    console.log("Evnet :: ",event);
    this.pageSize = event;
    this.loadAll();
  }

  private pageChanged(event){
    console.log("Changed event ",event);
    this.page = event;
    this.loadAll();
  }
  
}