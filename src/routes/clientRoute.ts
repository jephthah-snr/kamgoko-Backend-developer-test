import { FastifyPluginAsync } from "fastify"
import { ClientController } from "src/controller/clientController";
import { container } from 'tsyringe';
import authMiddleware from "src/middleware/authMiddleware";

const clientcontroller = container.resolve(ClientController)

const clientRoutes: FastifyPluginAsync = async(fastify) => {
    fastify.route({
        url: "/access",
        method: "POST",
        preHandler: [],
        handler: clientcontroller.clientAccess
    });

    fastify.route({
        url: "/new-conversation",
        method: "GET", //POST
        preHandler: [authMiddleware],
        handler: clientcontroller.startconversation
    })
}

export {clientRoutes}