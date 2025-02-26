import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { InvoicesController } from './invoices.controller';
import { InvoicesProcessor } from './invoices.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'invoices',
    }),
  ],
  controllers: [InvoicesController],
  providers: [InvoicesProcessor],
})
export class InvoicesModule {}
