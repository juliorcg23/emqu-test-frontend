/* eslint-disable @typescript-eslint/naming-convention */
export type Equipment = {
  id: number;
  name: string;
  ip: string;
  user_id: number;
};

export type EquipmentResponse = {
  success: boolean;
  data: Equipment[];
};
