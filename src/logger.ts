import { createLogger, transports } from "winston";
import { BluetorchLoggerConfig } from "./logger-config";
import { colorlessFormat, colorfulFormat } from "./logger-format";
import { UDPTransport } from "./udp-transport";

export const createBluetorchLogger = ({
    appName,
    level,
    host,
    port,
    logToConsole,
    onSendError
}: BluetorchLoggerConfig) => {
    const logger = createLogger({
        format: colorlessFormat(appName),
        level: level,
        exitOnError: false,
        transports: [
            new UDPTransport({
                host,
                port,
                onSendError,
            }),
        ],
    });

    if (logToConsole) {
        logger.add(new transports.Console({
            format: colorfulFormat(appName),
        }));
    }

    return logger;
}
