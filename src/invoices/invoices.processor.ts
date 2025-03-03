import {
  OnQueueActive,
  OnQueueCompleted,
  Process,
  Processor,
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import Crawler from './crawler';

@Processor('invoices')
export class InvoicesProcessor {
  private readonly logger = new Logger(InvoicesProcessor.name);

  @Process('crawl')
  async handleTranscode(job: Job) {
    this.logger.debug('Start crawling...');
    this.logger.debug(job.data);
    const crawler = new Crawler();
    // await crawler.crawl();
    this.logger.debug('Crawling completed');
    return job.data;
  }

  // 監聽事件：job 任務已啟動
  @OnQueueActive()
  onActive(job: Job) {
    this.logger.debug(
      `Processing job ${job.id} of type ${job.name} with data ${JSON.stringify(job.data)}...`,
    );
  }

  // 監聽事件：job 任務已完成
  @OnQueueCompleted()
  onCompleted(job: Job, result: any) {
    this.logger.debug(
      `Job ${job.id} completed. result: ${JSON.stringify(result)}`,
    );
  }
}
