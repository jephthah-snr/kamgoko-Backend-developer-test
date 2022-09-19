import { FastifyReply } from "fastify";
import Client from "src/models/client";
import Agent from "src/models/agent";
import { retrieveTokenValue } from "src/helpers/jwt";
import AppError from "src/helpers/Error";
import httpStatus from "http-status";


const authMiddleware = async (req: any, res: FastifyReply) => {
  try {
    if (!req.headers || !req.headers.authorization) {
      throw new AppError(httpStatus.NOT_FOUND, "no authorization header found");
    }

    const authorization = req.headers.authorization.split(" ");

    const jwtToken = authorization[1];
    
    const isJwtValid = await retrieveTokenValue<{
      id: string;
    }>(jwtToken);

    if (!isJwtValid) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "Unauthorized Client, please login to continue"
      );
    }

    const client = await Client.query().findById(isJwtValid.id);

    if (!client) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "Unauthorized Client, please login to continue"
      );
    }
    req.User = client;
  } catch (error: any) {
    return res.status(401).send({
      status: 401,
      message:
        error.message || "Failed to authorize Client, please login to continue",
      data: null,
    });
  }
};

export default authMiddleware;
