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
      await this.httpService
      .post<CreateTestResponse>('test', testData);

    return response;
  }

  async getTest(id: string): Promise<Test> {
    const { data } =
      await this.httpService
      .get<CreateTestResponse>(`test/${id}`);

    return data;
  }
}
