import { InjectQueue } from '@nestjs/bull';
import { Controller, Post } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('invoices')
export class InvoicesController {
  constructor(@InjectQueue('invoices') private readonly invoicesQueue: Queue) {}

  @Post('crawl')
  async crawl() {
    await this.invoicesQueue.add('crawl', {
      file: 'audio.mp3',
    });
  }
}
