export class Membership {
  id?: number;
  name?: string;
  price?: number;
  users?: number;
  storage?: number;
  aliases?: number;
  sending_limit?: number;
  filters?: boolean;
  autoresponders?: boolean;
  catch_all?: boolean;
}

export class User {
  id?: number;
  username?: string;
  password?: string;
  is_active?: boolean;
  newsletter?: boolean;
  membership?: Membership;
  token?: string;
  pubkey?: string;
  privkey?: string;
}

export class OrganizationUser {
  user_id?: number;
  username: string;
  domain: string;
  password?: string;
  recovery_email?: string;
  private_key?: string;
  public_key?: string;
  fingerprint?: string;
  isEditing?: boolean;
  unmodifiedUser?: OrganizationUser;

  constructor(data: any = {}) {
    this.user_id = data.user_id || data.id;
    this.username = data.username;
    this.domain = data.domain;
    this.password = data.password;
    this.recovery_email = data.recovery_email || data.recoveryEmail || '';
    this.private_key = data.private_key;
    this.public_key = data.public_key;
    this.fingerprint = data.fingerprint;
  }
}

export interface Storage {
  id: number;
  type: string;
  price: number;
}

export interface Payment {
  id: number;
  title: string;
  selected: boolean;
  monthlyFee: any;
  totalAnnualFee: any;
  monthlyDiscountRate?: number;
  annualDiscountRate?: number;
  classId?: string;
}

export interface UserMailbox {
  id: number;
  email?: string;
}

export const StorageData: Storage[] = [
  { id: 1, type: '5 Gb Storage', price: 2 },
  { id: 2, type: '10 Gb Storage', price: 4 },
  { id: 3, type: '15 Gb Storage', price: 8 },
  { id: 4, type: '20 Gb Storage', price: 12 },
  { id: 5, type: '25 Gb Storage', price: 16 }
];

export const PaymentData: Payment[] = [
  {
    id: 1,
    title: 'Pay Monthly',
    selected: true,
    monthlyFee: 0,
    totalAnnualFee: 0,
    monthlyDiscountRate: 0.8,
    annualDiscountRate: 0.9,
    classId: 'pay-monthly'
  },
  {
    id: 2,
    title: 'Pay Annually',
    selected: false,
    monthlyFee: 0,
    totalAnnualFee: 0,
    monthlyDiscountRate: 0.8,
    annualDiscountRate: 0.9,
    classId: 'pay-monthly'
  }
];
