import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {

  params = {
    closeButton: true,
    timeOut: 1500,
    progressBar: true,
    positionClass: 'toast-bottom-full-width'
  }

  constructor(private toastr: ToastrService) { }

  showSuccess(title: string, message: string) {
    this.toastr.success(message, title, this.params);
  }

  showError(title: string, message: string) {
    this.toastr.error(message, title, this.params)
  }

  showInfo(title: string, message: string) {
    this.toastr.info(message, title, this.params);
  }

}
