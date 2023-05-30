import { Module } from '@nestjs/common';

import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { PrismaService } from '@/prisma.service';
import { ProductModule } from '@/product/product.module';
import { ReportModule } from '@/report/report.module';
import { UserModule } from '@/user/user.module';

@Module({
  imports: [UserModule, ProductModule, ReportModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
