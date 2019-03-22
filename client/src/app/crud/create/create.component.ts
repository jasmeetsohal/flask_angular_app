import { Component } from "@angular/core";
import { CRUDService } from '../../core/crud.service';
import { Employee } from '../../core/crud-model';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
    selector:'create',
    templateUrl:'./create.component.html',
    styleUrls:['./create.component.scss']
})
export class CreateComponent {
    private employee = {} as Employee;
    private empId:string;
    constructor(private crudService: CRUDService,
                private route: ActivatedRoute,
                private router: Router,
                private location: Location) {
       this.route.params.subscribe(param=>{
           this.empId= param["id"];
           console.log("dsfsf ",this.employee.id);
           if(this.empId){
               this.crudService.find(this.empId).subscribe(response => {
                   this.employee = response;
                   console.log("id :: ",this.empId);
               })
           }
       })
    }

    private save(){
        console.log("employee id :: ",this.empId);
        if(this.empId){
            delete this.employee['_id'];
            console.log("employee e e e : ",this.employee);
            this.crudService.update(this.empId,this.employee).subscribe(response =>{
                  if(response){
                      this.router.navigate(['crud']);
                  }
            })

        }else{
            this.crudService.save(this.employee).subscribe(response => {
                if(response){
                    this.router.navigate(['crud']);
                }
            })
        }
    }

    /**
     * Auxiliary methods
     */
    private cancel(){
        this.location.back();
    }
}