import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'delete-modal',
    template: `
    <ng-template #content let-c="close" let-d="dismiss">
    <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Employee deletion</h4>
    <button type="button" class="close" aria-describedby="modal-title" (click)="d('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete <span class="text-primary">{{name}}</span> profile?</strong></p>
    <p>All information associated to this employee will be permanently deleted.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="c('cancel click')">Cancel</button>
    <button type="button" class="btn btn-danger" (click)="confirm();d('success click')">Ok</button>
  </div>
  </ng-template>
  <span class="fa fa-trash" (click)="openModal(content)" ></span>
    `
  })
  export class DeleteModal {
      @Input() name: string;
      @Output() open: EventEmitter<any> = new EventEmitter();
    constructor(public modal: NgbActiveModal,
                 config: NgbModalConfig,
                private _modalService: NgbModal
        ) {
            config.backdrop = 'static';
            config.keyboard = false;
        console.log("name :: ",this.name)
    }

    private confirm(){
        this.open.emit(null);
        this.modal.close();
    }

    openModal(content) {
        this._modalService.open(content);
      }
  }