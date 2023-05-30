import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateReportDto } from '@/report/dto/create-report.dto';
import { UpdateReportDto } from '@/report/dto/update-report.dto';
import { ReportService } from '@/report/report.service';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post()
  create(@Body() createReportDto: CreateReportDto): string {
    return this.reportService.create(createReportDto);
  }

  @Get()
  findAll(): string {
    return this.reportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.reportService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReportDto: UpdateReportDto
  ): string {
    return this.reportService.update(+id, updateReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return this.reportService.remove(+id);
  }
}
