export type Country = {
  id: number;
  countryname:string;
};

export type State = {
  id: number;
  statename: string;
  statecode: string;
  country: number;
  };

export type District = {
    id: number;
    districtname: string;
    districtcode: string;
    state: number;
  };

export type City = {
      id: number;
      cityname: string;
      citycode: string;
      distt: number;
    };

// export type AccountHeadDropDownModel = {
//   accountHeadId: number;
//   accountHeadName: string;
// };