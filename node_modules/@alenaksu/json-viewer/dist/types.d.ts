export interface JsonViewerState {
    expanded: {
        [path: string]: boolean;
    };
    filtered: {
        [path: string]: boolean;
    };
    highlight: string | null;
}
export declare const enum SupportedTypes {
    String = "string",
    Number = "number",
    Boolean = "boolean",
    Object = "object",
    Null = "null",
    Array = "array"
}
export declare type Primitive = string | number | boolean;
//# sourceMappingURL=types.d.ts.map