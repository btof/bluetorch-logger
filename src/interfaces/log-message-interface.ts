const levelSymbol = Symbol('level');
const messageSymbol = Symbol('message');

export interface LogMessage {
    message: string,
    level: string,
    timestamp: string,
    [levelSymbol]: string,
    [messageSymbol]: string
}
