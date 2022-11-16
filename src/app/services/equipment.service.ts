import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentResponse } from '../dtos/equipment.dto';
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
      await await this.httpService
      .post<EquipmentResponse>('equipment', equipmentData);
  }
}
