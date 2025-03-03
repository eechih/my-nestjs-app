import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { InjectQueue } from '@nestjs/bull';
import { Controller, Post } from '@nestjs/common';
import { Queue } from 'bull';

const s3Client = new S3Client({ region: 'us-east-1' });

@Controller('invoices')
export class InvoicesController {
  constructor(@InjectQueue('invoices') private readonly invoicesQueue: Queue) {}

  @Post('crawl')
  async crawl() {
    await this.invoicesQueue.add('crawl', {
      file: 'audio.mp3',
    });
  }

  @Post('upload')
  async upload() {
    console.log('Uploading invoice to ASW S3');
    const command = new PutObjectCommand({
      Bucket: 'amplify-drinkshopbackend-e-userfilesbucketafbcc364-pjj2hahj0zoo',
      Key: `upload/invoice_${new Date().getTime()}.json`,
      Body: JSON.stringify({
        name: 'test',
        createdAt: new Date().toISOString(),
      }),
    });

    const res = await s3Client.send(command);
    return res;
  }
}
