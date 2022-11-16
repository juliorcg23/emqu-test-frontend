import { Injectable } from '@angular/core';
import { CreateTestResponse, Test, TestResponse } from '../dtos/test.dto';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor(
    private httpService: HttpService,
  ) { }

  async getTestList() {
    const { data: testList } =
      await this.httpService
      .get<TestResponse>('test');

    return testList;
  }

  async createTest(testData: Test): Promise<CreateTestResponse> {
    const response =
      await await this.httpService
      .post<CreateTestResponse>('test', testData);

    return response;
  }
}
