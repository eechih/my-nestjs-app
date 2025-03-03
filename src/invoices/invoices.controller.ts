import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { InjectQueue } from '@nestjs/bull';
import { Controller, Post } from '@nestjs/common';
import { generateClient } from 'aws-amplify/api';
import { Queue } from 'bull';
import { listUserProfiles } from '../graphql/queries';

const s3Client = new S3Client({ region: 'us-east-1' });
const apiClient = generateClient({
  authMode: 'apiKey',
  apiKey: 'da2-jmnj4bodibgrthg6rcpf2qruva',
});

@Controller('invoices')
export class InvoicesController {
  constructor(@InjectQueue('invoices') private readonly invoicesQueue: Queue) {}

  @Post('crawl')
  async crawl() {
    const limit = 1;
    let nextToken: string | null = null;

    do {
      const listUserProfilesRes = await apiClient.graphql({
        query: listUserProfiles,
        variables: {
          limit: limit,
          nextToken: nextToken,
        },
      });

      if (listUserProfilesRes.errors) {
        console.log('Error', listUserProfilesRes.errors);
        throw new Error('Failed to list user profiles');
      }

      console.log(
        'userProfiles',
        listUserProfilesRes.data.listUserProfiles.items,
      );

      nextToken = listUserProfilesRes.data.listUserProfiles.nextToken;

      for (const userProfile of listUserProfilesRes.data.listUserProfiles
        .items) {
        if (!userProfile.vehicles) break;
        for (const vehicle of userProfile.vehicles) {
          if (vehicle?.type === 'Mobile') {
            await this.invoicesQueue.add('crawl', {
              phone: vehicle.phone,
              password: vehicle.password,
              owner: userProfile.owner,
            });
          }
        }
      }
    } while (nextToken);
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
