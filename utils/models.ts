export interface ITrip extends ITripData {
  id: string;
}

export interface ITripData {
  start_date: string;
  end_date: string;
  company_name: string;
  address: IAddress;
  covid: boolean;
  covid_test_date?: string;
}

export interface IAddress {
  street?: string;
  street_num?: number;
  city?: string;
  country: string;
  zip: string;
}

export interface ICountry {
  value: string;
  label: string;
}
