import { UDPTransport } from "udp-transport-winston";
import { createLogger, transports } from "winston";
import { BluetorchLoggerConfig } from "./logger-config";
import { colorlessFormat, colorfulFormat } from "./logger-format";

export const createBluetorchLogger = ({ appName, level, host, port }: BluetorchLoggerConfig) => {
    const logger = createLogger({
        format: colorlessFormat(appName),
        level: level,
        exitOnError: false,
        transports: [
            new UDPTransport({
                host: host,
                port: port,
                handleExceptions: true,
            }),
        ],
    });

    if (process.env.NODE_ENV !== 'production') {
        logger.add(new transports.Console({
            format: colorfulFormat(appName),
        }));
    }

    return logger;
}


