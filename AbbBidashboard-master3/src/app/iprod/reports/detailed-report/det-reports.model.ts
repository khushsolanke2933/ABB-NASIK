

export class ReportResponse {
 /* status: Status;
  machine: Machine;
  viName: string;
  productionOrder: string;
  batchNumber: string;
  passMap: Map<number, DaqParameters>;
  failMap: Map<number, DaqParameters>;*/
}

export class ReportMachineParameter {
  /*machineParameterId: number;
  machine: Machine;
  parameter: string;*/
}

interface DaqParameters {
  daqParameter: string;
  machineId: number;
  serialNumberId: number;
  resultValue: string;
}

export class ReportRequestObject {
  fromDate: string;
  machineId: number[];
  productionOrder: string;
  serialNuber: string;
  statusId: number;
  toDate: string;
  viId: number;
}
