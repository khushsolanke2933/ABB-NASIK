export class TestSequence {
  cDateTime: string;
  isDeleted: number;
  mDateTime: string;
  sequenceList: SequenceList[];
  sequenceType: string;
  sequenceTypeId: number;
}

interface SequenceList {
  cDateTime: string;
  isDeleted: number;
  mDateTime: string;
  machineDetails: MachineDetails;
  sequenceNumber: number;
  testSequenceId: number;
}

interface MachineDetails {
  machineCdatettime: string;
  machineDescription: string;
  machineId: number;
  machineIsDeleted: number;
  machineMdatetime: string;
  machineName: string;
}

export class testSeq{
  sequenceName:string;
  machineResponse:any;
}




