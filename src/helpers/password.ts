import * as bcrypt from "bcrypt";

const SALT_ROUNDS: string = process.env.SALT_ROUNDS || "12";

export async function compare(
  plainPassword: string,
  hashPassword: string
): Promise<boolean> {
  return await bcrypt.compare(plainPassword, hashPassword);
}

export async function hashPassword(plainPassword: string): Promise<string> {
  return await bcrypt.hash(plainPassword, parseInt(SALT_ROUNDS));
}
