/**
 *
 * Required External Modules
 *
 */

import { Request, Response, NextFunction } from 'express';

/**
 *
 * Create Error Classes and Handlers
 *
 */

// Base API error class
export class APIError extends Error {
  status: number;
  path?: string;

  constructor(params: {
    status: number;
    name?: string;
    message: string;
    path?: string;
    extras?: any;
  }) {
    super();
    this.status = params.status;
    this.name = params.name || 'ClientError';
    this.message = params.message;
    this.path = params.path;
  }
}

export function _404ErrorHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(404).send({
    status: 'pending',
    message: 'The requested resource was not found',
  });
}

export function expressErrorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let message: string = error.message;
  let path: string = error.path;
  let status: number = error.status;

  switch (error.name.toLowerCase().trim()) {
    case 'zoderror':
      status = 400;
      message = error.issues[0].message;
      path = error.issues[0].path[0];
      break;

    case 'jsonwebtokenerror':
      error.status = 401;
      break;

    case 'tokenexpirederror':
      error.status = 401;
      break;
  }

  res.status(status || 500).send({
    status: 'error',
    name: error.name,
    path: path,
    message: message || 'Internal Server Error',
  });
}
