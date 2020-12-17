import { Component } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { NbDialogRef, NbToastrService, NbGlobalPhysicalPosition, NbComponentStatus, NbDialogService } from '@nebular/theme';
import { User } from '../user.model';
import { ToasterConfig } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// tslint:disable-next-line: max-line-length
import { AlertComponent } from '../../alert/alert.component';
import { type } from 'os';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'ngx-add-user',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddUserComponent {
  user: User = new User();
  allUsers: User[] = [];
  fb: any;
  model: any = {};
  registerForm: FormGroup;
  submitted = false;

  constructor(protected ref: NbDialogRef<AddUserComponent>, private toastrService: NbToastrService,
    private formbuilder: FormBuilder, protected refer: NbDialogRef<AlertComponent>,
    private dialogService: NbDialogService, private userService: UsersService) {
  }
  config: ToasterConfig;

  title = 'Notification';
  content = `User added successfully!!`;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {

    this.userService.getAllUsers().subscribe(users => {
      this.allUsers = users;
    }, error => {
      this.toastrService.danger('', 'Error in getting USER details ');
    });

    this.registerForm = this.formbuilder.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      contactNo: ['', Validators.required],
      userPassword: [''],
    }, {
      // Used custom form validator name
      validator: Validators.compose([this.userNameDuplicate("userName")])
    });
  }

  userNameDuplicate(userName: string) {
    return (formGroup: FormGroup) => {
      let result = false;
      const control = formGroup.controls[userName];
      if (this.allUsers) {
        if (control.value) {
          let text = control.value;
          let stringTxt = (text += '').toUpperCase().trim();
          this.allUsers.forEach(val => {
            var check = val.userName.toUpperCase() === stringTxt;
            if (check) {
              result = true
            }
          });
        }
      }
      if (result) {
        return { duplicateUserName: true };
      }
      return null;
    };
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 5));
  }

  cancel() {
    this.ref.close(null);
    this.submitted = false;
    this.registerForm.reset();
  }

  submitBox() {
    this.dialogService.open(AlertComponent, {}).onClose.subscribe((value: boolean) => {
      if (value) {
        this.showToast('success', this.title, this.content);
        this.ref.close(this.user);
      } else {
        this.showToast('danger', 'User not inserted', '');
        this.ref.close(false);
      }
    },
    );
  }

  // tslint:disable-next-line: no-shadowed-variable
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
