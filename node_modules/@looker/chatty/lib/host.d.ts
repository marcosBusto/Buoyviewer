import type { ChattyHostBuilder } from './host_builder';
import 'es6-promise/auto';
/**
 * @private
 * Host connection status
 */
export declare enum ChattyHostStates {
    Connecting = 0,
    SynAck = 1,
    Connected = 2
}
/**
 * The Host connection to the client.
 */
export interface ChattyHostConnection {
    /**
     * Send a message to the client via a message channel.
     *
     * @param eventName The name of the event to send to the client
     * @param payload Additional data to send to the client. Restricted to transferable objects, ownership of the
     * object will be transferred to the client.
     */
    send(eventName: string, ...payload: any[]): void;
    /**
     * Send a message to the client via a message channel, and then await a response. The event listener in
     * the client returns a value or a promise that is resolved at some later point. This call will timeout
     * if the default timeout is a positive number. An alternate mechanism is to pass in an options
     * [[Options]] object as the last function parameter. In this scenerio, the default timeout is
     * ignored. The caller can then implement their own timeout by utilizing the abort signal.
     *
     * @param eventName The name of the event to send to the client
     * @param payload Additional data to send to client. Restricted to transferable objects, ownership of the
     * object will be transferred to the client.
     * @param options [[Options]]. Options can include an AbortController signal to allow request to be
     *        cancelled. If signal is set, the defaultTimeout is ignored.
     * @returns A Promise that will resolve when the client event handler returns. The promise will reject
     * if no response is received within [[ChattyClientBuilder.withDefaultTimeout]] milliseconds. The
     * response will be an array containing all responses from any registered event handlers on the client.
     */
    sendAndReceive(eventName: string, ...payload: any[]): Promise<any>;
}
/**
 * The host object for an iframe. The user should not create this object directly, it
 * is returned by the [[ChattyHostBuilder.build]] method.
 */
export declare class ChattyHost {
    private static _debug;
    /**
     * The underlying iframe element
     */
    iframe: HTMLIFrameElement;
    private _hostWindow;
    private _appendTo;
    private _connection;
    private _port;
    private _handlers;
    private _abortControllers;
    private _targetOrigin;
    private _state;
    private _defaultTimeout;
    private _sequence;
    private _receivers;
    /**
     * @param builder The client builder that is responsible for constructing this object.
     * @hidden
     */
    constructor(builder: ChattyHostBuilder);
    /**
     * @returns a Promise to an object that resolves when the client initiates the connection.
     */
    get connection(): Promise<ChattyHostConnection> | null;
    /**
     * @returns a flag indicating whether the client successfully connected to the host.
     */
    get isConnected(): boolean;
    /**
     * Connects to the client iframe. Waits for the client iframe to load and initiate a
     * connection using the chatty client.
     *
     * @returns a Promise to an object that resolves when the client has initiated the connection. The
     * object implements the [[ChattyHostConnection]] that can be used to talk to the host.
     */
    connect(): Promise<ChattyHostConnection>;
    private sendMsg;
    private isValidMsg;
}
