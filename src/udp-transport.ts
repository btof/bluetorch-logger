import { createSocket, Socket } from 'dgram';
import { EOL } from 'os';
import Transport = require('winston-transport');
import { LogMessage } from './interfaces/log-message-interface';

export class UDPTransport extends Transport {
    private options: UDPTransportOptions;
    private client: Socket;

    constructor(options: UDPTransportOptions) {
        super();
        this.options = { ...options };
        this.client = createSocket('udp4');
        this.client.unref();
    }

    log(info: LogMessage, callback: (error: Error | null, bytes: number | boolean) => void): void {
        callback(null, true);
        this.sendLog(info[Symbol.for('message')]);
    }

    async sendLog(message: string) {
        message += EOL;
        this.client.send(
            message,
            this.options.port,
            this.options.host,
            (error) => error && this.options.onSendError(error),
        );
    }
};