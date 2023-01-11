import { LitElement, TemplateResult } from 'lit';
import { Primitive } from './types';
/**
 * @since 1.0
 *
 * @csspart object - The object wrapper element.
 * @csspart property - The wrapper element of a property.
 * @csspart key - The key element of a property.
 * @csspart primitive - The primitive value.
 * @csspart primitive--string - Applied when the primitive is a string.
 * @csspart primitive--number - Applied when the primitive is a number.
 * @csspart primitive--boolean - Applied when the primitive is a boolean.
 * @csspart primitive--null - Applied when the primitive is a null.
 * @csspart preview - The value preview of a property.
 * @csspart highlight - The highlighted value.
 *
 * @cssproperty [--background-color] - The component background color.
 * @cssproperty [--color] - The text color.
 * @cssproperty [--font-family] - The font family.
 * @cssproperty [--font-size] - The font size.
 * @cssproperty [--indent-size] - The size of the indentation of nested properties.
 * @cssproperty [--indentguide-size] - The width of the indentation line.
 * @cssproperty [--indentguide-style] - The style of the indentation line.
 * @cssproperty [--indentguide-color] - The color of the indentation line.
 * @cssproperty [--indentguide-color-active] - The color of the indentation line when is active.
 * @cssproperty [--indentguide]
 * @cssproperty [--indentguide-active]
 * @cssproperty [--string-color] - The color of a string type value
 * @cssproperty [--number-color] - The color of a number type value
 * @cssproperty [--boolean-color] - The color of a boolean type value
 * @cssproperty [--null-color] - The color of a null type value
 * @cssproperty [--property-color] - The color of the property key.
 * @cssproperty [--preview-color] - The color of the collapsed property preview.
 * @cssproperty [--highlight-color] - The color of the highlighted value.
 */
export declare class JsonViewer extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    data?: any;
    private state;
    private setState;
    connectedCallback(): void;
    handlePropertyClick: (path: string) => (e: Event) => void;
    expand(glob: string | RegExp): void;
    expandAll(): void;
    collapseAll(): void;
    collapse(glob: string | RegExp): void;
    search(criteria: string): Generator<{
        value: any;
        path: string;
    }, void, unknown>;
    filter(criteria: string | RegExp): void;
    resetFilter(): void;
    renderObject(node: Record<string, unknown>, path: string): TemplateResult;
    renderNode(node: any, path?: string): Primitive | TemplateResult<1 | 2> | null;
    renderNodePreview(node: any): TemplateResult<1>;
    renderPrimitive(node: Primitive | null, path: string): Primitive | TemplateResult<1> | null;
    render(): Primitive | TemplateResult<1 | 2> | null;
}
//# sourceMappingURL=JsonViewer.d.ts.map