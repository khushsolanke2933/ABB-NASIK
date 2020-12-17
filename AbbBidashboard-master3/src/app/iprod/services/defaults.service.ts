
import { NbDialogService, NbToastrService, NbComponentStatus } from '@nebular/theme';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DefaultsService {

  constructor(private dialog: NbDialogService, private toaster: NbToastrService) { }
  showToast(msg: string, title: string, status: '' | NbComponentStatus) {
    this.toaster.show(msg, title, {
      status: status,
    });
  }
  getStatndardSettings(cols, check: boolean = false, edit: boolean = true, pageSize: number = 10) {
    const settings: any = {
      attr: {
        class: 'table table-bordered'
      }, // this is for getting default table class
      mode: 'external',
      actions: {
        columnTitle: 'CPanel',
        add: false,
        edit: edit,
        delete: edit,
        // custom: [{ name: 'ourCustomAction', title: '<i class="nb-compose"></i>' }],
        position: 'right',
      },
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',

      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      columns: cols,
      pager: {
        display: true,
        perPage: pageSize,
      },
    };
    if (check) settings.selectMode = 'multi';
    return settings;
  }
}
