import * as dotenv from "dotenv";
import { sign, verify } from "jsonwebtoken";

dotenv.config();

export const signToken = (id: string, time?: string) => {
  return sign({ id }, String(process.env.JWT_SECRET), {
    expiresIn: time == "" || !time ? String(process.env.JWT_EXPIRES_IN) : time,
  });
};

export const retrieveTokenValue = async <T>(
  token: string
): Promise<T & { iat: number }> => {
  return new Promise<T & { iat: number }>((res, rej) =>
    verify(token, String(process.env.JWT_SECRET), (err, value: unknown) => {
      if (err) return rej(err);
      res(value as T & { iat: number });
    })
  );
};
