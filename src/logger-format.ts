import { format } from "winston";
import { BluetorchLoggerConfig } from "./logger-config";

const levelStylist = format((log) => {
    log.level = log.level.toUpperCase().trim();
    return log;
});

const messageStylist = (config: BluetorchLoggerConfig) => format.printf((log) => {
    const {timestamp, level, message} = log;
    return `${timestamp} ${level} ${config.appName} ${message.trimStart()}`;
})

export default (config: BluetorchLoggerConfig) => format.combine(
    levelStylist(),
    format.colorize(),
    format.timestamp({format: 'MM-DD-YYYY hh:mm:ss.SSS'}),
    format.align(),
    messageStylist(config),
);
