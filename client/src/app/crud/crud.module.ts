import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { crudRoutes } from './crud.route';
import { CRUDService } from '../core/crud.service';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../core/shared.module';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports:[RouterModule.forChild(crudRoutes),
             CommonModule,
             FormsModule,
             SharedModule
             ],
    declarations:[ReadComponent,
                  CreateComponent
                  ],
    providers:[CRUDService,NgbActiveModal,NgbModalConfig]
})

export class CRUDModule {
    
}