import {
  OnQueueActive,
  OnQueueCompleted,
  Process,
  Processor,
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { sleep } from '../common/utils';

@Processor('audio')
export class AudioProcessor {
  private readonly logger = new Logger(AudioProcessor.name);

  @Process('transcode')
  async handleTranscode(job: Job) {
    this.logger.debug('Start transcoding...');
    this.logger.debug(job.data);
    await sleep(5000);
    this.logger.debug('Transcoding completed');
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
