import { format } from "winston";

const levelStylist = format((log) => {
    log.level = log.level.toUpperCase().trim();
    return log;
});

const messageStylist = (appName: string) => format.printf((log) => {
    const {timestamp, level, message} = log;
    return `${timestamp} ${level} ${appName} ${message}`;
})

export default (appName: string) => format.combine(
    levelStylist(),
    format.colorize(),
    format.timestamp({format: 'MM-DD-YYYY hh:mm:ss.SSS'}),
    messageStylist(appName),
);
