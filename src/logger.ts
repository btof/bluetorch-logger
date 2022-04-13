import { UDPTransport } from "udp-transport-winston";
import { createLogger, transports } from "winston";
import { BluetorchLoggerConfig } from "./logger-config";
import loggerFormat from "./logger-format";

export const createBluetorchLogger = ({appName, level, host, port}: BluetorchLoggerConfig) => {
    const logger = createLogger({
        format: loggerFormat(appName),
        level: level,
        transports: [
            new UDPTransport({
                host: host,
                port: port,
                handleExceptions: true,
            }),
        ],
    });

    if (process.env.NODE_ENV !== 'production') {
        logger.add(new transports.Console());
    }

    return logger;
}


