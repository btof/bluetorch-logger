import { UDPTransport } from "udp-transport-winston";
import { createLogger, transports } from "winston";
import { BluetorchLoggerConfig } from "./logger-config";
import loggerFormat from "./logger-format";

export const createBluetorchLogger = (config: BluetorchLoggerConfig) => {
    const logger = createLogger({
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
        logger.add(new transports.Console());
    }

    return logger;
}


