export interface Payment {
  id: number;
  value: number;
  dueDate: Date;
  description: string;
  person: string;
  status: boolean;
}
