import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import {
  NbDialogService, NbToastrService, NbComponentStatus, NbGlobalPhysicalPosition,
  NbDialogRef
} from '@nebular/theme';
import { AddUserComponent } from './add/add.component';
import { EditUserComponent } from './edit/edit.component';
import { User } from './user.model';
import { UsersService } from '../services/users.service';
import { KeyComponent } from './key/key.component';
import { DeleteUseralertComponent } from './deleteuseralert/deletealert.component';

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @Input() users: User;
  allUsers: User[] = [];
  user: User = new User();
  title = 'Error';
  content = `Not connected with server!!`;

  constructor(private httpClient: HttpClient,private toastrService: NbToastrService, private dialogService: NbDialogService,
    private userService: UsersService) { }

  ngOnInit() {

    this.loadUserData();

  }

  private loadUserData() {
    this.userService.getAllUsers().subscribe(users => {
      this.allUsers = users;
    }, error => {
      this.toastrService.danger('', 'Error in getting USER details ');
    });
  }

  deleteUser(userId: number, ndx: number): void {
    this.dialogService.open(DeleteUseralertComponent, {}).onClose.subscribe((value: boolean) => {
      if (value) {
        this.userService.removeUser(userId).subscribe(res => {
          this.allUsers.splice(ndx, 1);
          this.showToast('success', 'Notification', 'User deleted successfully!!');
        }, (err: any) => {
          // tslint:disable-next-line: no-console
          console.log(err);
        },
        );
      } else {
        this.showToast('danger', 'User not deleted', '');
      }
    },
    );
  }

  forgotPswd(user: User) {
    this.dialogService.open(KeyComponent, {
      context: {
        user: user,
      },
    }).onClose.subscribe(data => {
      if (data) {
        this.userService.changePassword(data).subscribe(userData => {
          this.loadUserData();
        });
      };
    });
  }

  editUser(user: User) {
    this.dialogService.open(EditUserComponent, {
      context: {
        user: user,
      },
    }).onClose.subscribe(data => {
      if (data) {
        this.userService.updateUser(data).subscribe(userData => {
        });
      }

    });
  }

  addUser() {
    this.dialogService.open(AddUserComponent, {}).onClose.subscribe((user: User) => {
      console.log('register user called');
      if (Object.getOwnPropertyNames(user).length > 3)
        if (user == null) return;
      this.user.actorDet.actorId = 1;

      if (user) {
        this.userService.createUser(user).subscribe(x => {
          this.allUsers.push(user);
          console.log(x);
        });
      }

    });
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: false,
      duration: 1000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: true,
    };
    const titleContent = title ? `${title}` : '';

    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }
}


