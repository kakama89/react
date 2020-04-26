export interface StockModel {
  id: number;
  name: string;
  requestDate: string;
  updateDate: string;
  status: string;
}

export interface StockModelEdit {
  id: number;
  name: string;
  requestDate: any;
  updateDate: any;
  status: string;
}
