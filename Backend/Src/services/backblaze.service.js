// utils/b2.client.js
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import crypto from "crypto";

const endpoint = process.env.B2_ENDPOINT;
const region = process.env.B2_REGION || "us-east-005";

export const s3 = new S3Client({
  region,
  endpoint, // e.g. https://s3.us-east-005.backblazeb2.com
  credentials: {
    accessKeyId: process.env.B2_KEY_ID,
    secretAccessKey: process.env.B2_APP_KEY,
  },
  forcePathStyle: false, // ok for Backblaze S3 compatibility
});

// helper to upload buffer
export async function uploadBufferToB2({ buffer, fileName, contentType }) {
  const key = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}-${fileName}`;

  const cmd = new PutObjectCommand({
    Bucket: process.env.B2_BUCKET,
    Key: key,
    Body: buffer,
    ContentType: contentType || "application/octet-stream",
    // Backblaze ignores ACLs like 'public-read' in S3, bucket-level controls apply
  });

  const res = await s3.send(cmd); // returns ETag etc.
  // Public URL (if bucket public) or direct S3 URL
  const url = `${endpoint}/${process.env.B2_BUCKET}/${encodeURIComponent(key)}`;
  return { url, key, res };
}
