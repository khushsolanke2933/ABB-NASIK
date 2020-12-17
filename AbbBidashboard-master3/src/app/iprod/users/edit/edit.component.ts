import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';
import {
  NbDialogRef, NbToastrService, NbComponentStatus, NbGlobalPhysicalPosition,
  NbDialogService
} from '@nebular/theme';
import { ToasterConfig } from 'angular2-toaster';
import { AlertComponent } from '../../alert/alert.component';
import { EdituseralertComponent } from './edituseralert/edituseralert.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'ngx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditUserComponent implements OnInit {
  @Input('user') user: User;
  registerForm: FormGroup;
  allUsers: User[];
  myUser: User;
  submitted = false;

  constructor(private formbuilder: FormBuilder, protected ref: NbDialogRef<EditUserComponent>, private toastrService: NbToastrService,
    private dialogService: NbDialogService, protected refer: NbDialogRef<AlertComponent>, private userService: UsersService) { }

  ngOnInit(): void {


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

    this.registerForm.patchValue(this.user);

    this.userService.getAllUsers().subscribe((val: User[]) => {
      this.allUsers = val;
      if (val == null) {
        this.allUsers = [];
      }
      this.allUsers.forEach(value => {
        if (this.user.userId === value.userId) {
          this.myUser = value;
        }
      });
      this.registerForm.updateValueAndValidity();
    });
  }

  userNameDuplicate(userName: string) {
    return (formGroup: FormGroup) => {
      let result = false;
      const control = formGroup.controls[userName];
      if (this.myUser && control.value) {
        let text = control.value;
        let stringTxt = (text += '').toUpperCase().trim();
        if (!(this.myUser.userName.toUpperCase() === stringTxt)) {
          if (this.allUsers) {
            this.allUsers.forEach(val => {
              if (val.userName.toUpperCase() === stringTxt) {
                result = true
              }
            });
          }
        }
      }
      if (result) {
        return { duplicateUserName: true };
      } else {
        return null;
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

  cancel() {
    this.ref.close(null);
    this.submitted = false;
    this.registerForm.reset();
  }

  config: ToasterConfig;

  title = 'Notification';
  content = `User updated successfully!!`;

  submitBox() {
    this.dialogService.open(EdituseralertComponent, {}).onClose.subscribe((value: boolean) => {
      if (value) {
        this.showToast('success', this.title, this.content);
        this.ref.close(this.user);
      } else {
        this.showToast('danger', this.title, 'User not updated !!');
        this.ref.close(false);
      }
    },
    );
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
