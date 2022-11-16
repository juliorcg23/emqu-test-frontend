import { Equipment } from './equipment.dto';
import { BaseResponse } from './response.dto';

export interface Statistics {
  haveErrors: Equipment[];
  doNotHaveErrors: Equipment[];
  equipmentStatistics: Equipment[];
};

export interface StatisticsResponse extends BaseResponse {
  data: Statistics;
}
