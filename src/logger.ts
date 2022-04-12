import { UDPTransport } from "udp-transport-winston";
import winston = require("winston");
import { BluetorchLoggerConfig } from "./logger-config";
import loggerFormat from "./logger-format";

export const BluetorchLogger = (config: BluetorchLoggerConfig) => {
    const logger = winston.createLogger({
        format: loggerFormat(config),
        transports: [
            new UDPTransport({
                host: config.host,
                port: config.port,
                handleExceptions: true,
            }),
        ],
    });

    if (process.env.NODE_ENV !== 'production') {
        logger.add(new winston.transports.Console());
    }

    return logger;
}


