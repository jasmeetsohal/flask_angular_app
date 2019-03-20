import { Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

export const crudRoutes: Routes = [
    {
        path:'',
        component:ReadComponent
    },
    {
        path:'create',
        component:CreateComponent
    },
    {
        path:'edit/:id',
        component:CreateComponent
    }
]