import { ComplexAttributeConverter } from 'lit';
import { SupportedTypes } from './types';
export declare function isRegex(obj: RegExp | any): boolean;
export declare function getType(obj: any): SupportedTypes;
export declare function isPrimitive(obj: any): boolean;
export declare function isNode(obj: any): boolean;
export declare function isPrimitiveOrNode(obj: any): boolean;
export declare function generateNodePreview(node: any, { nodeCount, maxLength }?: {
    nodeCount?: number;
    maxLength?: number;
}): string;
export declare function deepTraverse(obj: any): Generator<[any, string, string[]]>;
/**
 * Matches a string using a glob-like syntax)
 */
export declare function checkGlob(str: string, glob: string): boolean;
export declare const JSONConverter: ComplexAttributeConverter;
export declare const isDefined: (value: any) => boolean;
export declare const isMatchingPath: (path: string, criteria: string | RegExp) => boolean;
//# sourceMappingURL=utils.d.ts.map