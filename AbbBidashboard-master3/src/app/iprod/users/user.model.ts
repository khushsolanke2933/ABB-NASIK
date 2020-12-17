export class User {
  actorDet: ActorDet;
  userName: string;
  userTitle: string;
  firstName: string;
  lastName: string;
  gender: string;
  emailId: string;
  contactNo: string;
  userPassword: string;
  userId: number;
  jwtToken: string;
  newUserPassword: string;
  // userImage?: any;
  // isDeleted: number;
  // userPhotoImageIn64Base?: any;
  constructor() {
    // tslint:disable-next-line: no-use-before-declare
    this.actorDet = new ActorDet();
    this.actorDet.actorId = 1;
  }
}
class ActorDet {
  actorId: number;
  actorName: string;
  actorDesc: string;
  actorCdatettime: string;
  actorMdatettime: string;
  actorIsDeleted: number;
}
