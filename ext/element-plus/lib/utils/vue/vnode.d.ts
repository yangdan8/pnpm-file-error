import { createBlock } from 'vue';
import type { VNode, VNodeNormalizedChildren } from 'vue';
export declare enum PatchFlags {
    TEXT = 1,
    CLASS = 2,
    STYLE = 4,
    PROPS = 8,
    FULL_PROPS = 16,
    HYDRATE_EVENTS = 32,
    STABLE_FRAGMENT = 64,
    KEYED_FRAGMENT = 128,
    UNKEYED_FRAGMENT = 256,
    NEED_PATCH = 512,
    DYNAMIC_SLOTS = 1024,
    HOISTED = -1,
    BAIL = -2
}
export declare function isFragment(node: VNode): boolean;
export declare function isFragment(node: unknown): node is VNode;
export declare function isText(node: VNode): boolean;
export declare function isText(node: unknown): node is VNode;
export declare function isComment(node: VNode): boolean;
export declare function isComment(node: unknown): node is VNode;
export declare function isTemplate(node: VNode): boolean;
export declare function isTemplate(node: unknown): node is VNode;
/**
 * determine if the element is a valid element type rather than fragments and comment e.g. <template> v-if
 * @param node {VNode} node to be tested
 */
export declare function isValidElementNode(node: VNode): boolean;
export declare function isValidElementNode(node: unknown): node is VNode;
export declare const getFirstValidNode: (nodes: VNodeNormalizedChildren, maxDepth?: number) => string | number | boolean | void | import("vue").VNodeArrayChildren | {
    [name: string]: unknown;
    $stable?: boolean | undefined;
} | VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | null | undefined;
export declare function renderIf(condition: boolean, ...args: Parameters<typeof createBlock>): VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export declare function renderBlock(...args: Parameters<typeof createBlock>): VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export declare const getNormalizedProps: (node: VNode) => Record<string, any>;