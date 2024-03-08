export interface DonationItemList {
  id: number;
  amount: number;
  title: string;
  description: string;
  createdAt?: Date;
  causaName: string;
  userId: string;
}
