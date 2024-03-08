export interface DonationsData {
  id: number;
  amount: number;
  title: string;
  description: string;
  createdAt?: Date | null;
  causesId: number;
  userId: string;
}
