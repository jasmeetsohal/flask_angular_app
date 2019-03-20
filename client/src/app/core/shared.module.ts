import { NgModule } from "@angular/core";
import { DeleteModal } from './delete-modal';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[CommonModule],
    declarations:[DeleteModal],
    entryComponents:[DeleteModal],
    exports:[DeleteModal],
})
export class SharedModule    {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule:SharedModule,
            providers:[]
        }
    }
}