import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { crudRoutes } from './crud.route';
import { CRUDService } from '../core/crud.service';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../core/shared.module';
import { NgbActiveModal, NgbModalConfig, NgbPagination, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports:[RouterModule.forChild(crudRoutes),
             CommonModule,
             FormsModule,
             ReactiveFormsModule,
             SharedModule,
             NgbModule
             ],
    declarations:[ReadComponent,
                  CreateComponent
                  ],
    providers:[CRUDService,NgbActiveModal,NgbModalConfig,DecimalPipe]
})

export class CRUDModule {
    
}