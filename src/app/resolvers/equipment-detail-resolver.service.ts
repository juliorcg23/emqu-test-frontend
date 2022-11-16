import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Equipment } from '../dtos/equipment.dto';
import { EquipmentService } from '../services/equipment.service';

@Injectable({
  providedIn: 'root'
})
export class EquipmentDetailResolverService implements Resolve<Equipment> {

  constructor(
    private equipmentService: EquipmentService
  ) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Equipment> {
      const id = route.paramMap.get('id');
      return await this.equipmentService.getEquipment(id);
  }
}
