import { FastifyPluginAsync } from "fastify"
import { AgentController } from "src/controller/agentController";
import { container } from 'tsyringe';

const agentcontroller = container.resolve(AgentController)

const registeRoutes: FastifyPluginAsync = async(fastify) => {
    fastify.route({
        url: "/register",
        method: "POST",
        preHandler: [],
        handler: agentcontroller.registerAgent
    });

    fastify.route({
        url: "/login",
        method: "POST",
        preHandler: [],
        handler: agentcontroller.login
    });
}
export {registeRoutes}