import { Injectable } from '@angular/core';
import { Equipment, EquipmentDetailResponse, EquipmentResponse } from '../dtos/equipment.dto';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(
    private httpService: HttpService,
  ) { }

  async getEquipmentList() {
    const { data: equipmentList } =
      await this.httpService
      .get<EquipmentResponse>('equipment');

    return equipmentList;
  }

  async createEquipment(equipmentData) {
    const { data } =
      await this.httpService
      .post<EquipmentDetailResponse>('equipment', equipmentData);

    return data;
  }

  async getEquipment(id: string): Promise<Equipment> {
    const { data } =
      await this.httpService
      .get<EquipmentDetailResponse>(`equipment/${id}`);

    return data;
  }

  async updateEquipment(id, equipmentData) {
    const { data } =
      await this.httpService
      .put<EquipmentDetailResponse>(`equipment/${id}`, equipmentData);

    return data;
  }

  async deleteEquipment(id) {
    const { data } = await this.httpService.delete<EquipmentDetailResponse>(`equipment/${id}`);

    return data;
  }
}
