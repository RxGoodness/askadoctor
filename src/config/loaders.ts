/**
 *
 * Required External Modules
 *
 */

import { db_url, redis_url } from './env';
import { connect } from 'mongoose';
import * as redis from 'redis';

/**
 *
 * Export loaders
 *
 */

export const redisClient = redis.createClient({ url: redis_url });

export async function connectDatabases() {
  try {
    await connectMongo();
    console.log('MongoDB connected!');

    // await connectRedis();
    console.log('Redis connected!');
  } catch (error: any) {
    console.log(`An error has occured with one of the DBs: ${error.message}`);
  }
}

async function connectMongo() {
  await connect(db_url);
}
async function connectRedis() {
  await redisClient.connect();

  redisClient.on('error', (error: any) => {
    console.log(`An error has occured with Redis: ${error.message}`);
  });
}
