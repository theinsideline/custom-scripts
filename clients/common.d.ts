export interface LoadOptions {
    defer?: boolean;
    async?: boolean;
}
export interface Client {
    init: () => void;
    onLoadScript: () => void;
}
export declare class Common {
    createScriptElement(url: string, loadOptions?: LoadOptions): HTMLScriptElement;
    createStyleElement(url: string): HTMLLinkElement;
}
//# sourceMappingURL=common.d.ts.map