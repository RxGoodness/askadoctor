/**
 *
 * Required External Modules
 *
 */

import { jwt_secret, JWT_TTL } from '../config';
import { verify, sign } from 'jsonwebtoken';

/**
 *
 * Decoded Interface
 *
 */

export interface IDecoded {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

/**
 *
 * Export Utilities
 *
 */

export const jwt = {
  /**
   *
   * encode a token
   *
   */

  async encode(params: { id: string, role?: string }): Promise<string> {
    return new Promise((resolve, reject) => {
      sign(params, jwt_secret, { expiresIn: JWT_TTL }, (error, token) => {
        if (error) {
          reject(error);
        } else {
          resolve(token as string);
        }
      });
    });
  },

  /**
   *
   * decode a token
   *
   */

  async decode(params: { token: string }): Promise<IDecoded> {
    return new Promise((resolve, reject) => {
      const { token } = params;
      verify(token, jwt_secret, (error, decoded) => {
        if (error) {
          reject(error);
        } else {
          resolve(decoded as IDecoded);
        }
      });
    });
  },
};
