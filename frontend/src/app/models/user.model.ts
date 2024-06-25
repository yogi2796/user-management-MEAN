export interface User {
  _id?: string;
  name: string;
  phone: string;
  email: string;
  address?: string;
  gender?: string;
  country?: string;
  state?: string;
  city?: string;
  password?: string;
  isAdmin?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
