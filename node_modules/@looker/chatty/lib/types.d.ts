/**
 * Defines a general purpose callback method used to respond to events.
 */
export declare type Callback = (...args: any[]) => any;
/**
 * A container for [[Callback]] methods indexed by event name.
 */
export interface CallbackStore {
    [name: string]: Callback[];
}
/**
 * A container for [[AbortController]] instances indexed by event name. and sequence
 */
export interface AbortControllerStore {
    [nameSequence: string]: AbortController;
}
/**
 * Options associated with a sendReceive request
 */
export interface Options {
    /**
     * Abort signal used to abort a request. If the signal is present
     * the sendReceive request will never timeout.
     */
    signal: AbortSignal;
    /**
     * Propogate signal used to propagate a signal abort to the message
     * receiver.
     */
    propagateSignal?: boolean;
}
/**
 * A container for generic methods
 *
 * @deprecated Replaced by [[ChattyHostConnection]] and [[ChattyClientConnection]]
 */
export interface MethodStore {
    [name: string]: (...args: any[]) => any;
}
export interface Receiver {
    resolve: (value?: any) => void;
    reject: (value?: any) => void;
    timeoutId: any;
}
