interface UDPTransportOptions {
    host: string,
    port: number,
    onSendError: (error: unknown) => void,
}