export interface BluetorchLoggerConfig {
    appName: string;
    host: string;
    port: number;
    level: 'info' | 'warn' | 'error' | 'debug' | 'crit';
}