import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef, NbComponentStatus, NbGlobalPhysicalPosition, NbDialogService, NbToastrService } from '@nebular/theme';
import { User } from '../user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../password/must-match.validator';
import { EdituseralertComponent } from '../edit/edituseralert/edituseralert.component';

@Component({
  selector: 'ngx-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
})
export class KeyComponent implements OnInit {
  @Input('user') user: User;
  registerForm: FormGroup;
  submitted = false;
  title = 'Notification';
  content = `Password updated successfully!!`;

  constructor(protected ref: NbDialogRef<KeyComponent>, private formbuilder: FormBuilder, private dialogService: NbDialogService, private toastrService: NbToastrService) { }

  ngOnInit() {
    console.log("paas");
    this.registerForm = this.formbuilder.group({
      newUserPassword: ['', [Validators.required, Validators.minLength(8)]],
      newUserPasswordConfirm: ['', Validators.required],
    }, {
      validator: MustMatch('newUserPassword', 'newUserPasswordConfirm'),
    });

    this.registerForm.patchValue(this.user);

    this.registerForm.updateValueAndValidity();
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
  }

  submit() {
    this.dialogService.open(EdituseralertComponent, {}).onClose.subscribe((value: boolean) => {
      if (value) {
        this.showToast('success', this.title, this.content);
        this.ref.close(this.user);
      } else {
        this.showToast('danger', this.title, 'Password not updated !!');
        this.ref.close(false);
      }
    },
    );
  }

  cancel() {
    this.ref.close(null);
    this.submitted = false;
    this.registerForm.reset();
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: false,
      duration: 2000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
    };
    const titleContent = title ? `${title}` : '';

    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }

}
