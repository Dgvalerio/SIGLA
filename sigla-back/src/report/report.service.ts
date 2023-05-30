import { Injectable } from '@nestjs/common';

import { CreateReportDto } from '@/report/dto/create-report.dto';
import { UpdateReportDto } from '@/report/dto/update-report.dto';

@Injectable()
export class ReportService {
  create(createReportDto: CreateReportDto): string {
    return 'This action adds a new report';
  }

  findAll(): string {
    return `This action returns all report`;
  }

  findOne(id: number): string {
    return `This action returns a #${id} report`;
  }

  update(id: number, updateReportDto: UpdateReportDto): string {
    return `This action updates a #${id} report`;
  }

  remove(id: number): string {
    return `This action removes a #${id} report`;
  }
}
