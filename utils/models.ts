export interface Trip extends TripData {
  id: string;
}

export interface TripData {
  start_date: string;
  end_date: string;
  company_name: string;
  address: Address;
  covid: boolean;
  covid_test_date?: string;
}

export interface Address {
  street?: string;
  street_num?: number;
  city?: string;
  country: string;
  zip: string;
}

export interface Country {
  value: string;
  label: string;
}
