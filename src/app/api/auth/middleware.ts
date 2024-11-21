// app/api/auth/middleware.ts
import Cors from 'cors';
import { NextResponse } from 'next/server';

// Initialize the CORS middleware
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
  origin: '*', // You can specify specific origins like 'http://localhost:3000' for local development
});

// Helper function to run the CORS middleware
const runCors = (req: Request) =>
  new Promise((resolve, reject) => {
    cors(req as any, {} as any, (result: any) => {
      if (result instanceof Error) {
        reject(result);
      } else {
        resolve(result);
      }
    });
  });

export async function middleware(req: Request) {
  await runCors(req);
  return NextResponse.next();
}
