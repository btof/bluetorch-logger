import { createBluetorchLogger } from "./logger";

export { createBluetorchLogger } from "./logger";


const logger = createBluetorchLogger({
    appName: 'Ofek',
    host: 'spl',
    port: 123,
    level: 'debug',
});

logger.info('hi');