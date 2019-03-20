import { NgModule } from "@angular/core";
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';
import { accountRoutes } from './account.route';


@NgModule({
    imports:[RouterModule.forChild(accountRoutes)],
    declarations:[AccountComponent]
})

export class AccountModule{

}