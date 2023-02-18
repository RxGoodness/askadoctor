declare namespace Express {
  interface Request {
    decoded?: {
      id: string;
      role: string;
    };
  }

  interface Response {
    advancedSearch?: {
      count: number;
      pagination: any;
      data: any;
    };
  }
}
