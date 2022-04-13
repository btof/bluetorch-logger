import { format } from "winston";

const levelStylist = format((log) => {
    log.level = log.level.toUpperCase().trim();
    return log;
});

const messageStylist = (appName: string) => format.printf((log) => {
    const {timestamp, level, message} = log;
    return `${timestamp} ${level} ${appName} - ${message}`;
})

export const colorlessFormat = (appName: string) => format.combine(
    levelStylist(),
    format.timestamp({format: 'MM-DD-YYYY HH:mm:ss.SSS ZZ'}),
    messageStylist(appName),
);

export const colorfulFormat = (appName: string) => format.combine(
    colorlessFormat(appName),
    format.colorize(),
);
