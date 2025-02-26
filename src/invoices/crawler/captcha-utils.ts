import { createWorker } from 'tesseract.js';

export type ImageLike = string;

export async function recognizeCaptcha(image: ImageLike): Promise<string> {
  const worker = await createWorker('eng');
  const ret = await worker.recognize(image);
  const captcha = ret.data.text.replace('/-/g', '');
  return captcha;
}
