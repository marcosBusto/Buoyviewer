import { JsonViewerState } from './types';
export declare const toggleNode: (path: string, expanded?: boolean) => (state: JsonViewerState) => Partial<JsonViewerState>;
export declare const expand: (regexOrGlob: string | RegExp, isExpanded: boolean) => (_state: JsonViewerState, el: any) => Partial<JsonViewerState>;
export declare const filter: (regexOrGlob: string | RegExp) => (_state: JsonViewerState, el: any) => Partial<JsonViewerState>;
export declare const resetFilter: () => () => Partial<JsonViewerState>;
export declare const highlight: (path: string | null) => () => Partial<JsonViewerState>;
//# sourceMappingURL=stateChange.d.ts.map