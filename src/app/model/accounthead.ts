export type AccountHead = {
  id: number;
  name: string;
  code: number;
  detilsinbs: string;
  balanceType: string;
  drcreffect: string;
  description:string;  
  accountheadsr: number;
  group: string;
  entity: number;
  accountHeadName:string
};

export type AccountHeadModel = {
  entity: number;
  name: string;
  code: number;
  detilsinbs: string;
  balanceType: string;
  drcreffect: string;
  description:string;
  accountheadsr: number;
  group: string;
};

export type AccountHeadDropDownModel = {
  accountHeadId: number;
  accountHeadName: string;
};