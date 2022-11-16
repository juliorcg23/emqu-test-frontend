import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Test } from '../dtos/test.dto';
import { TestsService } from '../services/tests.service';

@Injectable({
  providedIn: 'root'
})
export class TestDetailResolverService implements Resolve<Test> {

  constructor(
    private testService: TestsService,
  ) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Test> {
      const id = route.paramMap.get('id');
      return await this.testService.getTest(id);
  }
}
