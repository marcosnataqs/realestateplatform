export interface Deal {
  id: number | null;
  name: string;
  address: string;
  purchasePrice: number;
  netOperatingIncome: number;
  capRate: number | null;
}
